import React,{Component} from 'react';
// import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import axios from 'axios';

export default class TableCookies extends Component{
  constructor(props) {
    super(props);
    this.state={
        employeeName: '',
        createdAt: '',
        address: '',
        latitude: '',
        longitude: '',
        arrayData: [],
      
    }
   
    axios ({
      url: 'https://ichater.com/backend/api/timeline/locations',
      method: 'GET',
      data: this.state
    }) 
    .then((response) => {
    //   console.log(response.data);
      var concatData = this.state.arrayData.concat(response.data);
     this.setState({
        arrayData: concatData
     }) 
    //  console.log(this.state.arrayData)
    });
  }

  render() {
    const columns = [
      {
        name: "Name",
        selector: "employeeName",
        sortable: true
      },
      {
        name: "Date",
        selector: "createdAt",
        sortable: true
      },
      {
        name: "Address",
        selector: "address",
        sortable: true,
        // cell: d => <span>{d.genres.join(", ")}</span>
      }
    ];

    const data = this.state.arrayData

    const tableData = {
      columns,
      data
    };


  return (
    <div className="main">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
    </div>
  );
}
}


