import {
    Table,
    Column,
    Model,
    HasMany,
    PrimaryKey,
    DataType,
    CreatedAt,
    UpdatedAt
}
    from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'users',
    modelName: 'User'
})
class User extends Model {
    @Column({
        primaryKey: true,
        type: DataType.STRING(36),
        defaultValue: DataType.UUIDV4,
    })
    declare id: string

    @Column({
        type: DataType.STRING(45),
    })
    declare username: string

    @Column({
        type: DataType.STRING(45),
    })
    declare email: string

    @CreatedAt
    declare createdAt: Date

    @UpdatedAt
    declare updatedAt: Date
}


export default User