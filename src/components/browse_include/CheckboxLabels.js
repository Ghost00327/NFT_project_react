import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checked_1: true,
    checked_2: false,
    checked_3: false,
    checked_4: false,
    checked_5: false,
    checked_6: false,
    checked_7: false,
    checked_8: false,
    checked_9: false,
    checked_10: false,
    checked_11: false,
    checked_12: false,
    checked_13: false,
    checked_14: false,
    checked_14: false,
    checked2_1: false,
    checked2_2: false,
    checked3_1: true,
    checked3_2: false,
    checked3_3: false,
    checked3_4: false,
    checked3_5: false,
    checked4_1: false,
    checked4_2: false,
    checked4_3: false,
    checked4_4: false,
    checked4_5: false,

  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <div>
        <p className="font-bold text-2xl mb-2">Categories</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_1}
                onChange={handleChange}
                name="checked_1"
                color="primary"
          />
            }
            label="ALL"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_2}
                onChange={handleChange}
                name="checked_2"
                color="primary"
          />
            }
            label="Fractal Art"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_3}
                onChange={handleChange}
                name="checked_3"
                color="primary"
          />
            }
            label="Data-Moshing"
          />
            <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_4}
                onChange={handleChange}
                name="checked_4"
                color="primary"
          />
            }
            label="Dynamic Painting"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_5}
                onChange={handleChange}
                name="checked_5"
                color="primary"
          />
            }
            label="2D Computer Graphics"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_6}
                onChange={handleChange}
                name="checked_6"
                color="primary"
          />
            }
            label="3D Computer Graphics"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_7}
                onChange={handleChange}
                name="checked_7"
                color="primary"
          />
            }
            label="Pixel Art"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_8}
                onChange={handleChange}
                name="checked_8"
                color="primary"
          />
            }
            label="Photo-painting"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_9}
                onChange={handleChange}
                name="checked_9"
                color="primary"
          />
            }
            label="Digital Collage "
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_10}
                onChange={handleChange}
                name="checked_10"
                color="primary"
          />
            }
            label="2D Digital Painting"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_11}
                onChange={handleChange}
                name="checked_11"
                color="primary"
          />
            }
            label="3D Digital Painting"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_12}
                onChange={handleChange}
                name="checked_12"
                color="primary"
          />
            }
            label="Manual Vector Drawing"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_13}
                onChange={handleChange}
                name="checked_13"
                color="primary"
          />
            }
            label="Mixed Media/Hybird Painting"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_14}
                onChange={handleChange}
                name="checked_14"
                color="primary"
          />
            }
            label="Rater Painting"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked_15}
                onChange={handleChange}
                name="checked_15"
                color="primary"
          />
            }
            label="Computer-Generated Painting"
          />
        </FormGroup>
      </div>
      <div>
        <p className="font-bold text-2xl pb-2">Other Options</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked2_1}
                onChange={handleChange}
                name="checked2_1"
                color="primary"
          />
            }
            label="Copyright transferred"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked2_2}
                onChange={handleChange}
                name="checked2_2"
                color="primary"
          />
            }
            label="Resellable"
          />
          </FormGroup>
      </div>
      <div>
        <p className="font-bold text-2xl pb-2">Sort By</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked3_1}
                onChange={handleChange}
                name="checked3_1"
                color="primary"
          />
            }
            label="Newest"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked3_2}
                onChange={handleChange}
                name="checked3_2"
                color="primary"
          />
            }
            label="Oldest"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked3_3}
                onChange={handleChange}
                name="checked3_3"
                color="primary"
          />
            }
            label="Price-Low to high"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked3_4}
                onChange={handleChange}
                name="checked3_4"
                color="primary"
          />
            }
            label="Price-Low to low"
          />
          </FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked3_5}
                onChange={handleChange}
                name="checked3_5"
                color="primary"
          />
            }
            label="Auctions Only"
          />
      </div>
      <div>
        <p className="font-bold text-2xl pb-2">Price</p>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked4_1}
                onChange={handleChange}
                name="checked4_1"
                color="primary"
          />
            }
            label="$1-$5.99"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked4_2}
                onChange={handleChange}
                name="checked4_2"
                color="primary"
          />
            }
            label="$6-$14.99"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked4_3}
                onChange={handleChange}
                name="checked4_3"
                color="primary"
          />
            }
            label="$15-$29.99"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked4_4}
                onChange={handleChange}
                name="checked4_4"
                color="primary"
          />
            }
            label="$30-$74.99"
          />
          </FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked4_5}
                onChange={handleChange}
                name="checked4_5"
                color="primary"
          />
            }
            label="$75-$100+"
          />
      </div>

    </div>
   
  );
}
