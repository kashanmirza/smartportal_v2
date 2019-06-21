import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

/*eslint-disable */

import Reactselectcomponent from '../customComponent/Reactselectcomponent';
import DataTable from '../pageComponent/Dml';
import {Loading} from '../../components/customComponent/loader'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,  } from 'reactstrap';
import AddOrganization from './AddOrganization';

//constant
import url from '../../constants/cummunication';
import gridColumn from '../../constants/gridColumn'

//actions
import {getServicesCategoryByInfo} from '../../redux/actions/serviceCategory/serviceCategoryByParentIfno';
import {addServicesCategory} from '../../redux/actions/serviceCategory/addServiceCategory';

//helper
import getTypeData from '../../helpers/getTypeData';




class OrganizationManagement extends Component {

    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.updateItem = this.updateItem.bind(this);

        this.state = {
            serviceCategoryName: "",
            parentServiceCategoryName: "",
            status: "",
            serviceData: [],
            isEdit: false,
            editID: null,
            show: false,
            editView:false,
            addView:false,
            serviceCategoryNameTD:[],
            parentServiceCategoryNameTD:[],
            statusTD : [
                {
                    label : "Active",
                    value : true
                },
                {
                    label : "Not Active",
                    value : false
                }
            ]


        }
    }

    componentDidMount() {
        this.props.getServicesCategoryWithParentInfo(url.getServicesCategoryWithParentInfo);
        let {serviceData} = this.props;
        this.setState({ serviceData: serviceData });

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    /*addModal() {
        this.setState({
            productName: '',
            productPrice: '',
            productCode: '',
            productDescription: '',
            status: ''
        });
        this.setState({
            show: true,
            editView: true,
            btnText: 'Add Product',
            modalTitle: 'Row Data Add',
        })
    }*/


    handleHide = () => {
        this.setState({ show: false });
    }

    addModal = () => {

        this.setState({
            show: true,
            modalTitle: "Add Service Category"
        })
    }

    AddItem = e => {
        e.preventDefault();
        if (this.state.productName === "") {
            this.setState({ nameError: 'please enter product name' })
        }
        else {
            this.setState({
                nameError: false
            })
        }
        if (this.state.productCode === "") {
            this.setState({ codeError: 'please enter product code' })
        }
        else {
            this.setState({
                codeError: false
            })
        }
        if (this.state.productPrice === "") {
            this.setState({ priceError: 'please enter product price' })
        }
        else {
            this.setState({
                priceError: false
            })
        }
        if (this.state.productDescription === "") {
            this.setState({ descError: 'please enter product description' })
        }
        else {
            this.setState({
                descError: false
            })
        }
        if (this.state.productName != '' && this.state.productCode != '' && this.state.productPrice != '' && this.state.productDescription != '') {
            var id = this.state.items.length + 1;
            var productName = this.state.productName;
            var productCode = this.state.productCode;
            var productPrice = this.state.productPrice;
            var productDescription = this.state.productDescription;
            var elements = this.state.items.slice();
            elements.push({ id: id, productName: productName, productCode: productCode, productPrice: productPrice, productDescription: productDescription });
            this.setState({ items: elements, id: "", productName: "", productCode: "", productPrice: "", productDescription: "" });
            console.log('fetch data', elements);
        }
        else {
            return false
        }

    }

    removeItem = (item) => {
        var index = this.state.items.indexOf(item);
        this.state.items.splice(index, 1);
        this.setState(this.state.items);
    };

    editItem = (index, item) => {
        this.setState({
            productName: index.productName,
            productCode: index.productCode,
            productPrice: index.productPrice,
            productDescription: index.productDescription,
            editID: index.id,
            item: index
        });
        this.setState({
            isEdit: true
        })
        console.log('edit item', index);
    }

    updateItem = (index, item) => {
        for (let i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id == this.state.editID) {
                this.state.items[i].productName = this.state.productName;
                this.state.items[i].productCode = this.state.productCode;
                this.state.items[i].productPrice = this.state.productPrice;
                this.state.items[i].productDescription = this.state.productDescription;
            }
        }
        this.setState({
            editID: null
        })
        this.setState({ productName: '', productCode: '', productPrice: '', productDescription: '' });
        console.log('update item', item);
    }

    cancelUpdate(item) {
        this.setState({
            editID: null
        })
        this.setState({ productName: '', productCode: '', productPrice: '', productDescription: '' });
        console.log('cancel item', item);
    }

    deleteRow(row) {
        const {serviceData} = this.state;
        var index = serviceData.indexOf(row);
        serviceData.splice(index, 1);
        this.setState(serviceData);
    }


    render() {


        if(!this.state.isLoading){
            return (
                <div>

                    <div className="row">
                        <div className="col-sm-2"> <span>Service Category</span></div>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            <Modal
                                isOpen={this.state.show}
                                toggle={this.handleHide}
                                className={this.props.className}
                            >
                                <ModalHeader toggle={this.handleHide}></ModalHeader>
                                <ModalBody className="clearfix">
                                   <AddOrganization
                                    title={this.state.modalTitle}
                                    handleHide={this.handleHide}
                                    serviceData = {this.props.serviceData}
                                    addServicesCategory={this.props.addServicesCategory}
                                   />
                                </ModalBody>

                            </Modal>

                            <div className="col-sm">
                                <Reactselectcomponent
                                    rcSelectCalss="form-control input-sm"
                                    rcSelectLable="Service Category Name"
                                    rcSelectFunc={e => this.handleChange(e)}
                                    rcSelectVal={this.state.selectedValue}
                                    rsSelectID=""
                                    rcSelectNam="selectedValue"
                                    rcSelectList={getTypeData(this.props.serviceData,"serviceCategoryNameEn")}
                                />
                                <p className="errorstyle">{this.state.selectCountryError}</p>
                            </div>
                            <div className="col-sm">
                                <Reactselectcomponent
                                    rcSelectCalss="form-control input-sm"
                                    rcSelectLable="Parent Service Category Name"
                                    rcSelectFunc={e => this.handleChange(e)}
                                    rcSelectVal={this.state.selectedValue}
                                    rsSelectID=""
                                    rcSelectNam="selectedValue"
                                    rcSelectList={getTypeData(this.props.serviceData,"parentServiceCategoryNameEn")}
                                />
                                <p className="errorstyle">{this.state.selectCountryError}</p>
                            </div>
                            <div className="col-sm">
                                <Reactselectcomponent
                                    rcSelectCalss="form-control input-sm"
                                    rcSelectLable="Status"
                                    rcSelectFunc={e => this.handleChange(e)}
                                    rcSelectVal={this.state.selectedValue}
                                    rsSelectID=""
                                    rcSelectNam="selectedValue"
                                    rcSelectList={getTypeData(this.props.serviceData,"active")}
                                />
                                <p className="errorstyle">{this.state.selectCountryError}</p>
                            </div>

                            <div className="col-sm">
                                <button className="btn btn-success btnRight"
                                        onClick={this.addModal}>Add Service Category</button>

                            </div>

                            <div className="clearfix"></div>
                            <DataTable
                                data={this.props.serviceData}
                                gridCol={gridColumn.serviceCategoryByParentInfo}
                                editButtonHandlar={this.editRow}
                                viewButtonHandlar={this.viewRow}
                                deleteButtonHandlar={this.deleteRow}
                            />
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (<loader />)
        }
    }
}

const mapStateToProps = state => {
    return {
        serviceData : state.serviceCategoryByInfoReducer.data,
        isLoading : state.serviceCategoryByInfoReducer.isLoading
    };
};


const mapDispatchToProps = dispatch => ({
    getServicesCategoryWithParentInfo: (url) => dispatch(getServicesCategoryByInfo(url)),
    addServicesCategory: (url) => dispatch(addServicesCategory(url,payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrganizationManagement);





