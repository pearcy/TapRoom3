import styled from "styled-components"
import tw from "twin.macro"

const StyledContainer = styled.main.attrs( {
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
    })`
      & {
        
        header {
        ${tw`bg-white shadow max-w-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-4xl font-bold leading-tight text-gray-900`}
        }

        form {
        ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
          }

        input {
        ${tw`border-solid mb-4 w-full border-solid border rounded py-2 px-4`}
        }

        button {
          ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
        }

      
      }
    `

export default StyledContainer


