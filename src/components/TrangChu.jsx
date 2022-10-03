import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'
import ChiTietSanPham from './ChiTietSanPham'
import DataPhone from './DataPhone.json'
export default class TrangChu extends Component {
    state = {
        chiTietSanPham: {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./ImagePhone/vsphone.jpg"
        },
        gioHang: []
    }
    handleChiTietSanPham = (sp) => {
        this.setState({
            chiTietSanPham: sp
        })
    }
    handleThemSanPham = (sp) => {
        let gioHangNew = [...this.state.gioHang];
        let sanPham = gioHangNew.find(item => item.maSP === sp.maSP)
        if (sanPham) {
            sanPham.soLuong += 1;
        } else {
            sanPham = { ...sp, soLuong: 1 };
            gioHangNew.push(sanPham);
        }
        this.setState({
            gioHang: gioHangNew
        })
    }
    handleXoaSanPham = (sp) => {
        let gioHangNew = [...this.state.gioHang];
        // cach 1: 
        // let index = gioHangNew.findIndex(item =>  item.maSP == sp.maSP);
        // gioHangNew.splice(index, 1);
        // cach 2:
        gioHangNew = gioHangNew.filter(item => item.maSP !== sp.maSP)
        this.setState({
            gioHang: gioHangNew
        })
    }

    handleTangGiamSoLuong = (sp, num) => {
        let gioHangNew = [...this.state.gioHang];
        let sanPham = gioHangNew.find(item => item.maSP == sp.maSP);
        sanPham.soLuong += num;
        if(sanPham.soLuong == 0 && num == -1){
            sanPham.soLuong = 1;
        }
        this.setState({
            gioHang: gioHangNew
        })
    }
    render() {
        let { chiTietSanPham, gioHang } = this.state;
        return (
            <div className='container'>
                <h2 className='text-center mt-4'>On Tap Props</h2>
                <div className='text-primary text-end' >
                    <span style={{ cursor: 'pointer', fontSize:18 }} data-bs-toggle="modal" data-bs-target="#exampleModal">Giỏ hàng<i className="fa-solid fa-cart-shopping"></i>({gioHang.reduce((tong, item) => tong += item.soLuong, 0)})</span>
                </div>
                <DanhSachSanPham DataPhone={DataPhone} handleChiTietSanPham={this.handleChiTietSanPham} handleThemSanPham={this.handleThemSanPham} />
                <ChiTietSanPham sp={chiTietSanPham} />
                <GioHang handleTangGiamSoLuong={this.handleTangGiamSoLuong} handleXoaSanPham={this.handleXoaSanPham} gioHang={gioHang} />
            </div>
        )
    }
}
