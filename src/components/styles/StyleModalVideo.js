
import styled from 'styled-components' //https://www.styled-components.com/docs/basics#styling-any-components
// import theme from './../../settings/theme'

const style = {
  ModalContainer: styled.div`
    background: #000;
    .modal-title {
      color: #ccc;
    }
    .modal-header {
      border-bottom: 0px solid #000;
      .close {
        color: #999;
        opacity: 1;
        text-shadow: 0 1px 0 #999;
        &:hover {
          color: #4da3ff!important;
        }
      }
    }
    .modal-body {
      padding: 0;
    }
    .modal-footer {
      border-top: 0px solid #000;
    }
  `,
}


export default style
