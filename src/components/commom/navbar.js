import Typography from '@mui/material/Typography';
const Navbar = (props) => {
  const title = props.title
  return (
      <>
        <div className={"navbar"}>
          <div className="navItem">
            {title.map((element, id) => (
              <Typography sx={{fontWeight:600, color:"white"}} key={id} variant="h4">{element.title} </Typography>
            ))}
          </div>
        </div>
      </>
  );
}

export default Navbar;
