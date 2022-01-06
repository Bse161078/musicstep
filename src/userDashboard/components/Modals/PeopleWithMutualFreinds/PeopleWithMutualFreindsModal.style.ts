import styled from 'styled-components'

const PeopleWithMutualFreindsModalStyle = styled.div`
   border-top: 2px solid #ccc;
   padding: 20px 0px;
   
   .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
 
    width: 100%;
    height: 580px;

    p{
      font-size: 14px;
      font-weight: bold;
    }

    .link {
      color: #FF33CC;
      cursor: pointer;
    }
  }

  .people-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
`

export default PeopleWithMutualFreindsModalStyle
