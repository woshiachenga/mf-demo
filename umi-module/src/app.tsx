import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

// 定义根节点
export function rootContainer(root: JSX.Element): JSX.Element {
  return (
    <ConfigProvider
      autoInsertSpaceInButton={false}
      pagination={{
        showSizeChanger: true,
      }}
      locale={zhCN}
    >
      <div className="growth-system-custom">{root}</div>
    </ConfigProvider>
  );
}

export async function getInitialState() {
  return {};
}

// 页面布局配置
export const layout = () => {
  return {
    title: '',
    name: '增长工具',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
