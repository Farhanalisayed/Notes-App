// Write your code here
import {MainDiv, Head, Para} from './styledComponents'

const NoteItem = props => {
  const {title, note} = props
  return (
    <MainDiv>
      <Head>{title}</Head>
      <Para>{note}</Para>
    </MainDiv>
  )
}
export default NoteItem
