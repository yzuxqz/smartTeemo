import React from 'react';
import Video from '../../assets/video.mp4'
import Img from '../../assets/img.png'
import {downFun} from "@/utils";

export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page lmslicgd12m-editor_css' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: (
            <span>
              <span>
                <p>
                  <b>SmartTeemo</b>
                </p>
              </span>
            </span>
          ),
        },
        content: {
          className: 'banner2-content',
          children: (
            <span>
              <span>
                <p>英雄联盟对战助手</p>
              </span>
            </span>
          ),
        },
        button: {
          className: 'banner2-button',
          children: (
            <span>
              <span>
                <span>
                  <p style={{margin:0}} onClick={downFun}>立即下载</p>
                </span>
              </span>
            </span>
          ),
        },
      },
    ],
  },
};


export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>清华软件系提供专业的服务</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content content4-title-content',
        children: (
          <span>
            <p>科技想象力，娱乐创造力，助您轻松上王者</p>
          </span>
        ),
      },
    ],
  },
  video: {
    className: 'content4-video',
    children: {
      video: Video,
      image: Img,
    },
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>©2023 XDZ,WWJ All Rights Reserved</span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
