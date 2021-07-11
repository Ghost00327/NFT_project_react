import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div style={{color:'#d1d3d6'}}>
    <FormGroup>
      <FormControlLabel
        control={<GreenCheckbox name="checkedG"/>}
        label="Indeterminate"
      />
      <FormControlLabel 
        control={
          <GreenCheckbox
            checked={state.checkedF}
            name="checkedG"
            indeterminate
          />
        }
        label="AutoWithdraw"
      />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Indeterminate"
      />
    </FormGroup>
    </div>
    
  );
}
