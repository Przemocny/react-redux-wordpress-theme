import React from 'react';
import { WPApi } from '../api';
import './contact.scss';

const SelectOption = ({ label, value }) => {
  return <option value={value}>{label}</option>;
};
const SelectInput = ({
  values = [
    { label: 'val1', value: '1' },
    { label: 'val2', value: '2' },
    { label: 'val3', value: '3' },
    { label: 'val4', value: '4' },
    { label: 'val5', value: '5' },
  ],
  placeholder = 'Choose...',
  onChange = console.log('asd'),
  value = undefined,
  disabled = false,
  label = null,
}) => {
  const options = values.map((e, k) => {
    return <SelectOption key={k} {...e} />;
  });
  return (
    <div className="custom-select">
      <select
        disabled={disabled}
        className="form-control form-control-lg"
        value={value}
        onChange={onChange}
      >
        <option hidden>{placeholder}</option>
        {options}
      </select>
      <i className="icofont icofont-rounded-down"></i>
    </div>
  );
};

const reasons = [
  { label: 'Academy', value: 'Academy' },
  { label: 'CV improvement', value: 'CV improvement' },
  { label: 'Cooperation', value: 'Cooperation' },
];

class ContactForm extends React.Component {
  state = {
    email: '',
    msg: '',
    reason:'',
    imBusy: false,
  };
  action = () => {
    this.setState({
      imBusy: true,
    });
    WPApi.sendMail(this.state.email, this.state.reason).then(({ message }) => {
      this.setState({
        msg: message,

        email: '',
        imBusy: false,
      });
    });
  };
  render() {
    if (this.state.imBusy) {
      return <div>sending mail</div>;
    }
    return (
      <React.Fragment>
        <div
          className="contact"
          style={{
            backgroundImage: `url(https://wp.api.localhost-group.com/wp-content/uploads/2020/01/aboutimage.png)`,
          }} id="contact"
        >
          <div className="bg"></div>
          <div className="container-fluid">
            <div className="content">
              <h4 className="title">Arrange a video conference</h4>
              <form className="row">
                  <div className="col-lg-4 col-xs-12 pb-2 text-center">
                   <SelectInput
                      values={reasons}
                      placeholder={'Select reason'}
                      value={this.state.reason}
                      onChange={ev => {
                        const {value} = ev.target;
                        this.setState({
                          reason: value,
                        });
                      }}
                    /> 
                  </div>
                  <div className="col-lg-4 col-xs-12 pb-2 text-center">
                    <input
                      type="email"
                      value={this.state.email}
                      placeholder="Place for your email"
                      onChange={ev => {
                        const { value } = ev.target;
                        this.setState({
                          email: value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-lg-3 col-xs-12 pb-2">
                    <button className="contact-button"onClick={this.action}>
                      Send<i className="icofont icofont-long-arrow-right"></i>
                    </button>
                  </div>
              </form>
              <h6>{this.state.msg}</h6>
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;
