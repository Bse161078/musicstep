import styled from "styled-components";
import { Tabs } from "antd";
import { rgba } from "polished";

const { TabPane } = Tabs;

export const TabsStyle = styled(Tabs)`
  .ant-tabs-tab {
    margin-left: 30px;
    padding: 10px 0;
    font-size: 16px;
    font-weight: bold;

    &.ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: #100840;
        opacity: 1;
      }
    }

    .ant-tabs-tab-btn {
      color: #0c0c0c;
      opacity: 0.3;
    }
  }

  .ant-tabs-ink-bar {
    background: #100840;
  }

  .ant-tabs-nav {
    &:before {
      border-bottom: solid 1px ${rgba("#0c0c0c", 0.5)};
    }
  }
`;

export const TabPaneStyle = styled(TabPane)``;
