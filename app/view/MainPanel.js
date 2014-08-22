/*
 * File: app/view/MainPanel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('app.view.MainPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',

    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.tab.Bar'
    ],

    config: {
        items: [
            {
                xtype: 'container',
                title: '首页',
                iconCls: 'home',
                html: '',
                scrollable: false,
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: '首页'
                    },
                    {
                        xtype: 'button',
                        height: 82,
                        itemId: 'taskList',
                        ui: 'plain',
                        width: 95,
                        icon: 'true',
                        iconAlign: 'top',
                        iconCls: 'list',
                        labelCls: 'main-label',
                        text: '任务大厅'
                    },
                    {
                        xtype: 'button',
                        height: 82,
                        itemId: 'logout',
                        ui: 'plain',
                        width: 95,
                        icon: 'true',
                        iconAlign: 'top',
                        iconCls: 'action',
                        labelCls: 'main-label',
                        text: '退出'
                    }
                ]
            },
            {
                xtype: 'container',
                title: '个人中心',
                iconCls: 'user'
            },
            {
                xtype: 'container',
                title: '关于',
                iconCls: 'settings'
            }
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});