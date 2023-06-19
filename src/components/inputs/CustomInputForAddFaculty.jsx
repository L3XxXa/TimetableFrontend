import './inputForAddFaculty.css'

const CustomInputForAddFaculty = (props) => {
  return (
    <div>
      <input type="text"
             className="inputForAddFaculty"
             placeholder={props.placeholder}
             onChange={props.onChange}
             value={props.value}
      />
    </div>
  );
};

export default CustomInputForAddFaculty;