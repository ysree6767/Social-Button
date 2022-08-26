const Button = (props) => {
  //  Write your code here.
  const { text, color, className } = props
  return <button className={`button ${className}`}>{text} </button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1> Social Buttons</h1>
    <div className='button-container'>
      <Button className='like-button' text='Like' />
      <Button className='comment-button' text='Comment' />
      <Button className='share-button' text='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
