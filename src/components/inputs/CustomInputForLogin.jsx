import './inputForLogin.css'

const CustomInputForLogin = (props) => {
  return (
    <div>
      <input type="text"
             className="input"
             placeholder={props.placeholder}
             onChange={props.onChange}
             value={props.value}
      />
    </div>
  );
};

export default CustomInputForLogin;