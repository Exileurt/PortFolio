import './scrollDriven.css'

const scrollDriven = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed top-10 w-3/5 h-px origin-left flex bg-dark-yellow" />
      <div
        id="progress"
        className="fixed top-10 w-3/5 h-px origin-left flex bg-yellow-500"
      />
    </div>
  )
}

export default scrollDriven
