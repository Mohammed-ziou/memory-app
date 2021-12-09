import { Grid, InputAdornment, IconButton, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Input = (props) => {
  const {
    half,
    name,
    label,
    handleChange,
    autoFocus,
    type,
    handleShowPassword,
  } = props;
  return (
    <Grid item sx={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        required
        fullWidth
        variant="outlined"
        onChange={handleChange}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
