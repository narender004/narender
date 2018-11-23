import React from 'react';
import './invoice.css';
import * as loginService from '../../services/loginService';
import invoiceModel from '../../Model/invoiceModel';

var indents=[];
var tempData=[];
var resData=[]
class Invoice extends React.Component {
constructor(props){
 super(props);
 this.state = {
   invoice_value: new invoiceModel(), loading: true,
}

};

componentDidMount() {
    var get_token = localStorage.getItem('token')
    loginService.getInvoice({ token: get_token }).then(res => {
        resData=res.data.data
        this.setState({ invoice_value: { ...this.state.invoice_value, ...res.data.data } });
        
      
        for (var i = 0; i <res.data.data.length; i++) {
            indents.push(<div className='indent' key={i}></div>);
          }
          this.setState({loading: false});
          this.setState({invoice_value: this.state.invoice_value})
    })
    

    


}

getf(fieldName) {
   tempData = [];

    for (var i = 0; i <resData.length; i++) {
        debugger;
      if(fieldName==='hosted_invoice_url'){
        tempData.push(<div className='indent' ><a href={resData[i][fieldName]} >detail</a></div>);
      }
      else if(fieldName==='period_start' ||fieldName==='period_end' ||fieldName==='date'){

var dateTime = new Date(resData[i][fieldName]*1000);
var month=(dateTime.getMonth()+1)
        tempData.push(<div className='indent' key={i}>{dateTime.getDate()+'/'+month+'/'+dateTime.getFullYear()}</div>);
       }else{
        tempData.push(<div className='indent' key={i}>{resData[i][fieldName]}</div>);
       }
      }
      return tempData
}


  render() {
      if(this.state.loading) {
          return null
      }
    return (
        <div className="container">
        <div className="row">
          <div className="col-md labeled">Paid amount </div>
          <div className="col-md labeled">Remaning amount</div>
          <div className="col-md labeled">Transction date</div>
          <div className="col-md labeled">Subscription start</div>
          <div className="col-md labeled">Subscription end</div>
          <div className="col-md labeled">Detail</div>
          {/* <div className="col-md labeled">Data</div> */}
       
        </div>
        <div className="row">
        {/* {this.state.indents}
    "Some text value" */}
    {/* <div className='col-md labeled' >{this.getf('hosted_invoice_url')}</div> */}
        <div className='col-md labeled'>{this.getf('amount_paid')}</div><div className='col-md labeled'>{this.getf('amount_remaining')}</div><div className='col-md labeled'>{this.getf('period_start')}</div><div className='col-md labeled'>{this.getf('date')}</div><div className='col-md labeled'>{this.getf('period_end')}</div><div className='col-md labeled'  >{this.getf('hosted_invoice_url')}</div>
      </div>
      </div>
    );
  }
}

export default Invoice;