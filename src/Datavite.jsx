import { Component } from 'react';

class Datavite extends Component {
 
  render() {

    return (
    <>
    <tr>
        <td>{this.props.obj.abbreviation}</td>
        <td>{this.props.obj.city}</td>
        <td>{this.props.obj.conference}</td>
        <td>{this.props.obj.division}</td>
        <td>{this.props.obj.full_name}</td>
        <td>{this.props.obj.name}</td>
        
        
    </tr>
    </>
    ) ;
  }
}
export default Datavite