import React, { FC, useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const DynamicRouter: FC = () => {
  const { appName } = useParams();
  const [DynamicDom, setDynamicDom] = useState(undefined);

  const getAssets = async (assetUri: string) => {
    try {
      // asset을 캐싱하지않기위해 timestap를 쿼리스트링에 넣어서 호출
      return await Axios.get(`${assetUri}?timestamp=${new Date().getTime()}`);
    } catch (error) {
      console.log(error);
    }
  };

  interface iScriptPrameter {
    fileUrl: string;
    id: string;
  }

  const loadScript = async ({ fileUrl, id }: iScriptPrameter) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.setAttribute('src', fileUrl);
      script.setAttribute('data-dynamic-component-id', id);
      script.setAttribute('crossorigin', '');
      script.onload = () => {
        resolve(window[id]);
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.body.appendChild(script);
    });
  };
  const importComponent = async () => {
    const rootUrl = `/media/micro/jcp-application`;
    const assetName = `/app-${appName}/asset-manifest.json`;
    const assetUrl = rootUrl + assetName;
    const response: any = await getAssets(assetUrl);
    console.log(response, 'axios ㅌ에스트');
    if (!response.hasOwnProperty('data')) return;
    const assets = response.data;
    const promiseAll: any = [];
    const { id } = assets;
    const fileUrl = rootUrl + '/' + id + assets.files[id + '.js'];

    let importedScript = document.querySelector(`script[data-dynamic-component-id="${id}"]`);

    if (importedScript == null) {
      promiseAll.push(await loadScript({ id, fileUrl }));
    }
    try {
      const res = await Promise.all(promiseAll);
      const resComponent = res[0];
      resComponent.id = id;
      setDynamicDom(resComponent);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    importComponent();
    return () => {
      console.log('기존데이터지우기');
      window['jcp-application'] = null;
      let importedScript = document.querySelector(`script[data-dynamic-component-id="jcp-application"]`);
      if (importedScript !== null) {
        document.body.removeChild(importedScript);
      }
      importedScript = null;
    };
  }, [appName]);
  console.log(DynamicDom);
  if (DynamicDom) {
    return (
      <>
        <div>DynamicRouter ::: {appName}</div>
        <DynamicDom.App appBasePath={`apps/${appName ?? 'application'}`} />
      </>
    );
  }
  return (
    <>
      <div>DynamicRouter ::: {appName}</div>
    </>
  );
};

export default DynamicRouter;
