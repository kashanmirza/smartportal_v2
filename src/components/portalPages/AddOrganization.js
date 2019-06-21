import React, { Component } from 'react';

/*eslint-disable */
import selectionValues from '../../responseJson/selectionValues';
import Reactselectcomponent from '../customComponent/Reactselectcomponent';
import Buttonscomponent from '../customComponent/Buttonscomponent';
import Textinputcomponent from '../customComponent/Textinputcomponent';
import Checkboxcomponent from '../customComponent/Checkboxcomponent';


//helper

import getTypeData from '../../helpers/getTypeData'


class AddOrganization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceCategoryName: "",
            parentServiceCategoryId: "",
            status: "",
            isEdit : false,
            isView : false,
            selectedValues : _.cloneDeep(selectionValues),
            nameError:"Something Worng"

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };




    handleSubmit = () => {

    };



    /*AddItem = e => {
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

    searchTable(e) {
        this.setState({
            search: e.target.value.substr(0.20)
        })
    }*/

    render() {
            return (
                <div>
                    <div className="row">
                        <div className="col-sm-2">
                            <span>{this.props.title}</span>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">

                            <div className="row">
                                <div className="col-md-6">
                                    <Reactselectcomponent
                                        rcSelectCalss="form-control"
                                        rcSelectLable="Parent Service Category ID"
                                        rcSelectFunc={e => this.handleChange(e)}
                                        rcSelectVal={this.state.parentServiceCategoryId}
                                        rsSelectID=""
                                        rcSelectNam="selectedCourse"
                                        rcSelectList={getTypeData(this.props.serviceData,"parentServiceCategoryID","parentServiceCategoryNameEn")}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Textinputcomponent
                                        inputLable="Service Category Sequence"
                                        inputPlaceholder=""
                                        inputName="productName"
                                        inputType="text"
                                        inputValue={this.state.serviceCategorySequence}
                                        inputDisabled={false}
                                        inputCalssName="form-control input-sm"
                                        inputID=""
                                        inputHandle={e => this.handlechange(e)}
                                    />
                                    <p className="errorstyle">{this.state.nameError}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <Textinputcomponent
                                        inputLable="Service Category Name En"
                                        inputPlaceholder=""
                                        inputName="productName"
                                        inputType="text"
                                        inputValue={this.state.serviceCategoryNameEn}
                                        inputDisabled={false}
                                        inputCalssName="form-control input-sm"
                                        inputID=""
                                        inputHandle={e => this.handlechange(e)}
                                    />
                                    <p className="errorstyle">{this.state.nameError}</p>
                                </div>
                                <div className="col-md-6">
                                    <Textinputcomponent
                                        inputLable="Service Category Name Ar"
                                        inputPlaceholder=""
                                        inputName="productName"
                                        inputType="text"
                                        inputValue={this.state.serviceCategoryNameAr}
                                        inputDisabled={false}
                                        inputCalssName="form-control input-sm"
                                        inputID=""
                                        inputHandle={e => this.handlechange(e)}
                                    />
                                    <p className="errorstyle">{this.state.nameError}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <Textinputcomponent
                                        inputLable="Service Category Desc En"
                                        inputPlaceholder=""
                                        inputName="productName"
                                        inputType="text"
                                        inputValue={this.state.serviceCategoryDescEn}
                                        inputDisabled={false}
                                        inputCalssName="form-control input-sm"
                                        inputID=""
                                        inputHandle={e => this.handlechange(e)}
                                    />
                                    <p className="errorstyle">{this.state.nameError}</p>
                                </div>
                                <div className="col-md-6">
                                    <Textinputcomponent
                                        inputLable="Service Category Desc Ar"
                                        inputPlaceholder=""
                                        inputName="productName"
                                        inputType="text"
                                        inputValue={this.state.serviceCategoryDescAr}
                                        inputDisabled={false}
                                        inputCalssName="form-control input-sm"
                                        inputID=""
                                        inputHandle={e => this.handlechange(e)}
                                    />
                                    <p className="errorstyle">{this.state.nameError}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="customLable">Active</label>
                                    <Checkboxcomponent
                                        checkboxClass="checkbox-inline"
                                        checkboxName="check1"
                                        checkboxLable=""
                                        checkboxDisabled={false}
                                        checkboxValue={this.state.status ? '' : 'select check 1'}
                                        checkboxHandle={e => this.handleChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Buttonscomponent
                                    buttonFunction={this.props.handleHide}
                                    btnType="button"
                                    btnCalss="btn btn-primary btnLeft"
                                    btnTitle="Close"
                                />
                            </div>
                            <div className="col-md-4">
                                <Buttonscomponent
                                    buttonFunction={this.buttonFuncCall}
                                    btnType="button"
                                    btnCalss="btn btn-primary btnLeft"
                                    btnTitle="Submit"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default AddOrganization;





