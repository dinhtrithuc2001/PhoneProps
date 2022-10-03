import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {
  render() {
    let {DataPhone,handleChiTietSanPham,handleThemSanPham,} = this.props
    return (
      <div className='row'>
        {DataPhone.map((sp, index) => {
          return <SanPham sp = {sp} key={index} handleThemSanPham={handleThemSanPham} handleChiTietSanPham={handleChiTietSanPham}/>
        })}
      </div>
    )
  }
}
