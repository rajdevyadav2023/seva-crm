import React from 'react'

const TechnicalReg = () => {
  return (
    <div className='contnr'>
      <div className="top-controls">
        <h3 className='top-heading'>Technical Complaint Registration</h3>
        <div className="form-group">
          <div className="row p-3">
            <div className="col-md-4">
              <input type="text" className='form-control' placeholder='Enter Here - Complaint No / Mobile No ' />
            </div>
            <div className="col-md-2">
              <button className='btn btn-success'>Search</button>
            </div>
            <div className="col-md-3 text-end">
              <button className='btn btn-danger'>Outage Areas</button>
            </div>
            <div className="col-md-2">
              <button className='btn btn-danger'>History</button>
            </div>

          </div>

        </div>
      </div>

      <div className="row bg-light m-3 tech-comp">
        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="area" className='my-1 p-1'>Area</label>
          <input type="text" id='area' placeholder='Enter Area Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="ca" className='my-1 p-1'>CA Number</label>
          <input type="text" id='ca' placeholder='Enter CA Number Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="division" className='my-1 p-1'>Division</label>
          <input type="text" id='division' placeholder='Enter Division Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="center" className='my-1 p-1'>Complaint Centre</label>
          <input type="text" id='center' placeholder='Enter Complaint Centre Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="category" className='my-1 p-1'>Complaint Category</label>
          <input type="text" id='category' placeholder='Enter Complaint Category Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="fault" className='my-1 p-1'>Type Of Fault</label>
          <input type="text" id='fault' placeholder='Enter Type of Fault Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="caller-name" className='my-1 p-1'>Caller Name</label>
          <input type="text" id='caller-name' placeholder='Enter Caller Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="caller-phone" className='my-1 p-1'>Caller Phone Number</label>
          <input type="text" id='caller-phone' placeholder='Enter Phone Number Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="caller-alt" className='my-1 p-1'>Alternate Phone Number</label>
          <input type="text" id='caller-alt' placeholder='Enter Alternate Phone Number' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="email" className='my-1 p-1'>Email ID</label>
          <input type="text" id='email' placeholder='Enter Email ID Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="c-number" className='my-1 p-1'>Complaint Centre Phone</label>
          <input type="text" id='c-number' placeholder='Enter Complaint Centre Phone' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="consumer-name" className='my-1 p-1'>Consumer Name</label>
          <input type="text" id='consumer-name' placeholder='Enter Consumer Name Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="con-cat" className='my-1 p-1'>Connection Category</label>
          <input type="text" id='con-cat' placeholder='Enter Connection Category Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="reg-phone" className='my-1 p-1'>Registered Phone No</label>
          <input type="text" id='reg-phone' placeholder='Enter Registered Phone No' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="meter" className='my-1 p-1'>Meter No</label>
          <input type="text" id='meter' placeholder='Enter Meter No Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="whatsapp" className='my-1 p-1'>WhatsApp No</label>
          <input type="text" id='whatsapp' placeholder='Enter WhatsApp No Here' className='form-control' />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="address" className='my-1 p-1'>Consumer/Caller Address</label>
          <textarea name="address" id="address" cols="30" rows="4" className='form-control' placeholder='Enter Address Here'></textarea>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group p-3">
          <label htmlFor="remark" className='my-1 p-1'>Remarks</label>
          <textarea name="remark" id="address" cols="30" rows="4" className='form-control' placeholder='Enter Remarks Here'></textarea>
          </div>
        </div>
      </div>

<div className="bottom-controls px-4 py-2">
  <button className='btn btn-danger'>Status Page</button>
  <button className='btn btn-danger mx-2'>Register</button>
  <button className='btn btn-danger mx-2'>Reset</button>
  <button className='btn btn-danger mx-2'>Tagging</button>
</div>
    </div>
  )
}

export default TechnicalReg
