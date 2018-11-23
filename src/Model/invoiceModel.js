import React from 'react';



export default class InvoiceModel extends React.Component {
    constructor (props){
        super(props);
      this.invoiceValue({})
    }
   invoiceValue(object) {
        this.amount_paid = object.amount_paid ||'';
        this.amount_remaining=object.amount_remaining ||''       
        this.date=object.date ||''  
        this.period_end=object.period_end ||''       
        this.period_start=object.period_start ||''     
        this.hosted_invoice_url=object.hosted_invoice_url ||''    
       
        this.err=object.err ||false  
   
    }
};