import React from 'react';
import {Button,Icon} from 'antd'

export default function Footer(props){
  const socials = [
    {icon:'github',href:''},
    {icon:'wechat',href:''},
    {icon:'twitter',href:''},
    {icon:'envelope',href:''},
    {icon:'reddit',href:''},
    {icon:'medium',href:''},
    {icon:'facebook',href:''},
    {icon:'telegram',href:''},
    {icon:'youtube',href:''},
  ]
  const links = [
    {
      title:'FOUNDATION & COMMUNITY',
      sub:[
        {title:'EXPEX Foundation',href:''},
        {title:'Knowledge Base',href:''},
      ]
    },
    {
      title:'EXPEX PROTOCOL',
      sub:[
        {title:'Whitepaper',href:''},
        {title:'Expanse Smart Contracts',href:''},
        {title:'Github Repositories',href:''},
        {title:'Protocol Audit Report',href:''},
      ]
    },
    {
      title:'WALLET & DEX',
      sub:[
        {title:'Disclaimer',href:''},
        {title:'Feedback',href:''},
        {title:'Github Repositories',href:''},
        {title:'Protocol & Tokens',href:''},
      ]
    },
  ]
  return (

    <div className="bg-white">
      <div className="container mt50">
        <div className="row justify-content-center">
          {
            socials.map((social,index)=>
              <div className="col-auto p20" key={index}>
                <i className={`fa fa-${social.icon} fs32 color-grey-900`}></i>
              </div>
            )
          }
        </div>
        <hr />
        <div className="row justify-content-between">
          {
            links.map((link,index)=>
              <div className="col-auto p20" key={index}>
                  <div className="fs16 lh30 color-grey-900">{link.title}</div>
                  <div className="">
                    {
                      link.sub.map((item,index)=>
                        <a key={index} href="" className="fs14 lh20 d-block color-grey-800">{item.title}</a>
                      )
                    }
                  </div>
              </div>
            )
          }
        </div>
        <div className="fs12 text-center p20 ">
          EXPEX Project Ltd.(EXPEX Foundation), All Right Reserved.
        </div>
      </div>
    </div>


  )
}
