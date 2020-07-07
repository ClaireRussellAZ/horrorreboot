import React from "react";
class Signup extends React.Component {
  render() {
    return (
      <div>
        <button onclick="document.getElementById('id01').style.display='block'">
          Sign Up
        </button>
        <div id="id01" className="modal">
          <span
            onclick="document.getElementById('id01').style.display='none'"
            class="close"
            title="Close Modal"
          >
            times;
          </span>
          <form class="modal-content" action="/action_page.php">
            <div class="container">
              <h1>Sign Up</h1>
              <p>Please give us your name.</p>
              <hr />
              <label for="name">
                <b>Name</b>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                required
              />
              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
              <label for="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
              />
              <label>
                <input
                  type="checkbox"
                  checked="checked"
                  name="remember"
                  style={{marginBottom:15}}
                />{" "}
                Remember me
              </label>
              <p>
                By creating an account you agree to our{" "}
                <a href="#" style={{color: "dodgerblue"}}>
                  Terms & Privacy
                </a>
                .
              </p>
              <div class="clearfix">
                <button
                  type="button"
                  onclick="document.getElementById('id01').style.display='none'"
                  class="cancelbtn"
                >
                  Cancel
                </button>
                <button type="submit" class="signup">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        )
      </div>
    );
  }
}
export default Signup;

