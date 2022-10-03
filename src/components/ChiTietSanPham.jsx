import React, { Component } from 'react'

export default class ChiTietSanPham extends Component {
  render() {
    let {sp} = this.props;
    return (
      <div className='row mt-5'>
        <div className='col-4'>
          <h4 className='text-center m-0'>{sp.tenSP}</h4>
          <img src={sp.hinhAnh} className='img-fluid' />
        </div>
        <div className='col-8'>
          <table className='table'>
            <thead>
              <tr>
                <th colSpan={2}>Thông số kỹ thuật</th>
                <td></td>
              </tr>
              <tr>
                <th>Mã sản phẩm</th>
                <td>{sp.maSP}</td>
              </tr>
              <tr>
                <th>Màn hình</th>
                <td>{sp.manHinh}</td>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <td>{sp.heDieuHanh}</td>
              </tr>
              <tr>
                <th>Camera trước</th>
                <td>{sp.cameraTruoc}</td>
              </tr>
              <tr>
                <th>Ram</th>
                <td>{sp.ram}</td>
              </tr>
              <tr>
                <th>Rom</th>
                <td>{sp.rom}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }
}
