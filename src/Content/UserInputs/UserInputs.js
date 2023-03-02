import { Component } from "react";
import UserInputsInner from "./UserInputsInner";


class UserInputs extends Component{
    render(){
        const { placeholders } = this.props;
        return(
            <UserInputsInner  placeholders={placeholders}  render = {(handleData) =>(
                <tr>
                {placeholders.map((item) => (
                  <td key={item}>
                    <input
                      key={item}
                      type="text"
                      onChange={this.handleData}
                      name={item}
                      placeholder={item}
                    />
          
                  </td>
                ))}
              </tr>
            )}
            />
        )
    }
}

export default UserInputs