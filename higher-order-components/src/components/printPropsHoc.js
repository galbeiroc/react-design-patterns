export const printPropsHoc = Component => {
  return (props) => {
    console.log(props)
    return <Component {...props} />;
  }
};

// const UserInfoWrapper = (props) => {
//   console.log(props)
//   return <Component {...props} />;
// }
