import styled from 'styled-components'

const ProfileModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  font-size: 16px;
  .image-wrapper {
    img {
      width: 216px;
      height: 216px;
      border-radius: 50%;
      background: #fff;
      padding: 6px;
      margin-top: -55px;
    }
  }
  .person-name {
    font-size: 25px;
  }
  .text-wrapper{
    display: flex;
    gap:5px;
    justify-content:center;
  }
  .description {
    font-size: 16px;
    font-weight: 300;
  }
  .recent-event-wrapper {
    display: flex;
    flex-direction: column;
    padding: 30px 0px;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    .title{
      font-weight: 300;
    }
  }
`
export default ProfileModalStyle
