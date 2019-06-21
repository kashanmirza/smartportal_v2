import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import _ from 'lodash';

import Tablebutton from '../customComponent/Tablebutton';
import Useravatar from '../customComponent/Useravatar';
import Anchorcomponent from '../customComponent/Anchorcomponent';
import Buttonscomponent from '../customComponent/Buttonscomponent';
import Textinputcomponent from '../customComponent/Textinputcomponent';
import Reactselectcomponent from '../customComponent/Reactselectcomponent';

import sortBy from 'sort-by';
import gridColumn from '../../constants/gridColumn'


class DataTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }



    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        function buttonFormatter(cell, row) {
            return (
                <Tablebutton
                    rowData={row}
                    editButtonHandlar={this.props.editButtonHandlar}
                    viewButtonHandlar={this.props.viewButtonHandlar}
                    deleteButtonHandlar={this.props.deleteButtonHandlar} />
            );
        }
        /*

      function avatarFormatter(cell, row) {
       return <Useravatar
       Useravatarname={row.productName}
       rowData={row} />
       }


      function anchorFormatter(cell, row) {
       return <Anchorcomponent
       anchotDisplayName={row.productName}
       rowData={row}
       invokeAnchorButtonhandlar={this.viewRow.bind(this)} />
       }*/

       function columnStatusFormat(fieldValue, cell, row) {
            if (fieldValue != null) {
                return fieldValue.replace(" ", "") + '-status';
            }
        }
        return (
            <div>
              <div className="col-md-12">
                <div className="row">
                 <BootstrapTable
                     keyField='serviceCategoryID'
                      data={this.props.data}
                      pagination={true}
                      search={true}
                      containerClass='tableContainer'
                      headerContainerClass='tableHeader'
                      bodyContainerClass='bodyContainer'
                      bordered={false}
                      // insertRow
                      // className="table-responsive"
                      striped
                      hover>
                     {this.props.gridCol &&
                         _.get(this.props,"gridCol",[]).map((col) => {
                         if(col.type === "string"){
                             return(
                                 <TableHeaderColumn dataSort={true}  dataField={col.dbField}>{col.name}</TableHeaderColumn>
                             )
                         }
                         if(col.type === "action"){
                             return (
                             <TableHeaderColumn dataAlign='right' dataFormat={buttonFormatter.bind(this)}>{col.name}</TableHeaderColumn>
                             )
                         }
                         })
                     }
                     {/*<TableHeaderColumn width="50" isKey dataField='id'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataSort={true}  dataField='productName'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='productPrice'>Product Price</TableHeaderColumn>
                    <TableHeaderColumn dataField='productDescription'>Product Description</TableHeaderColumn>
                    <TableHeaderColumn dataField='productCode'>Product Code</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center' dataField='status' columnClassName={columnStatusFormat}>Status</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataField='actions' >Actions</TableHeaderColumn>*/}
                  </BootstrapTable>

                </div>
              </div>
            </div>
        );
    }
}

export default DataTable;
