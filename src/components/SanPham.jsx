import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    let {sp,handleChiTietSanPham,handleThemSanPham,} = this.props;
    return (
      <div className='col-4 mt-3'>
        <div className="card" style={{ width: '20rem' }}>
          <img src={sp.hinhAnh} className="img-fluid" style={{height: '20rem'}} alt={sp.hinhAnh} />
          <div className="card-body">
            <h5 className="card-title">{sp.tenSP}</h5>
            <p className="card-text">{sp.giaBan.toLocaleString()} VND</p>
            <button onClick={() => handleChiTietSanPham(sp)} className="btn btn-success">Xem chi tiết</button>
            <button onClick={() => handleThemSanPham(sp)} className='btn btn-warning ms-2'>Thêm Sản Phẩm</button>
          </div>
        </div>
      </div>
    )
  }
}
