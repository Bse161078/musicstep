import styled from "styled-components";
import { Steps, Tabs } from "antd";
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

const { Step } = Steps;

export const StepsStyle = styled(Steps)`
  max-width: 400px;
  margin-top: 30px;
  padding-top: 30px;

  .ant-steps-item-title {
    font-size: 16px;
    font-weight: bold;
    color: #100840;
    top: -45px;
    left: -25px;
  }

  .ant-steps-item-icon {
    margin-left: 0;

    .ant-steps-icon {
      top: 0.5px;

      &:first-child {
        .ant-steps-icon-dot {
          top: 0.5px;
        }
      }
    }

    .ant-steps-icon-dot {
      width: 5px;
      height: 5px;
    }
  }

  .ant-steps-item-process
    .ant-steps-item-icon
    > .ant-steps-icon
    .ant-steps-icon-dot {
    background-color: #100840;
  }

  .ant-steps-item-finish {
    .ant-steps-item-container {
      .ant-steps-item-tail {
        margin-left: 0;

        &:after {
          background-color: #100840;
        }
      }
    }
    .ant-steps-item-icon {
      .ant-steps-icon-dot {
        background: #100840;
      }
    }
  }

  .ant-steps-item-container {
    .ant-steps-item-tail {
      margin-left: 0;

      &:after {
        height: 2px;
        margin-left: 5px;
        width: 100%;
      }
    }
  }
`;

export const StepStyle = styled(Step)``;
