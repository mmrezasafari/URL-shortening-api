const SignIn = () => {
  return (
    <>
      <div className="back-to-home">
        <button className="back-to-home-button" placeholder="Back to home">
          <a className="button-a" href="/">
            Back to home
          </a>
        </button>
      </div>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Responsive Registration Form</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form>
                <div class="input_field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="input_field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="input_field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    required
                  />
                </div>
                <div class="row clearfix">
                  <div class="col_half">
                    <div class="input_field">
                      <input type="text" name="name" placeholder="First Name" />
                    </div>
                  </div>
                  <div class="col_half">
                    <div class="input_field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="input_field radio_option">
                  <input type="radio" name="radiogroup1" id="rd1" />
                  <label for="rd1">Male</label>
                  <input type="radio" name="radiogroup1" id="rd2" />
                  <label for="rd2">Female</label>
                </div>
                <div class="input_field select_option">
                  <select>
                    <option>Select a country</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                  <div class="select_arrow"></div>
                </div>
                <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb1" />
                  <label for="cb1">I agree with terms and conditions</label>
                </div>
                <div class="input_field checkbox_option">
                  <input type="checkbox" id="cb2" />
                  <label for="cb2">I want to receive the newsletter</label>
                </div>
                <input class="button" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
