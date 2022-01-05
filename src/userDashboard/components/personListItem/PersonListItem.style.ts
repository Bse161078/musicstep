import styled from 'styled-components'

const PersonListItemStyle = styled.div`
  .simple-list-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #f7f7f7;
    border-radius: 32px;
    max-width: 268px;
    height: 58px;
    padding: 5px 5px 5px 5px;
    .person-image {
      width: 48px;
      height: 48px;
    }
    .person-name {
      font-size: 17px;
    }
  }
  .image-list-wrapper {
    width: 400px;
    height: 86px;

    display: grid;
    gap: 10px;
    grid-template-columns: 0.1fr 1fr 0.1fr;
    font-size: 10px;
    font-weight: 400;
    align-items: center;
    background: #f7f7f7;
    padding: 20px;
    border-radius: 32px;
    .person-image {
      width: 56px;
      height: 56px;
    }
  }

  .person-name {
    font-size: 20px;
    font-weight: bold;
  }

  .name-wrapper {
    display: flex;
    gap: 5px;
    flex-direction: column;
    text-align: start;
    .title {
      font-weight: bold;
    }
  }

  .arrow-img {
    cursor: pointer;
  }
`
export default PersonListItemStyle
