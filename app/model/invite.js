
'use strict'

/**
 * 邀请审批表
 */

const { DataTypes } = require('sequelize')

module.exports = app => {
    const Invite = app.model.define('invite',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                // defaultValue: DataTypes.UUIDV4
            },
            project_id: {
                type: DataTypes.INTEGER,
                field: 'project_id',
                allowNull: false
            },
            approved_id: {
                type: DataTypes.UUID,
                allowNull: false
            },
            invitee_id: {
                type: DataTypes.STRING(255),
                allowNull: false,
                field: 'invitee_id'
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            create_time: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'create_time',
                defaultValue: DataTypes.NOW
            },
            approve_time: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'approve_time',
                defaultValue: DataTypes.NOW
            }
        },
        {
            tableName: 'invite',
            timestamps: false
        }
    )
    Invite.associate = () => {
        // 定义Invite 和 User 的多对一关系 
        app.model.Invite.belongsTo(app.model.User, { foreignKey: 'invitee_id' })
        // 定义Invite 和 Project 的多对一关系
        app.model.Invite.belongsTo(app.model.Project, { foreignKey: 'project_id' })
    }
    return Invite
}
