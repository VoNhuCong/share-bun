import {
    Table,
    Column,
    Model,
    HasMany,
    PrimaryKey,
    DataType,
    CreatedAt,
    UpdatedAt,
    ForeignKey,
    BelongsTo
}
    from 'sequelize-typescript';
import User from './User';

@Table({
    timestamps: true,
    tableName: 'blogs',
    modelName: 'Blog'
})
class Blog extends Model {
    @Column({
        primaryKey: true,
        type: DataType.STRING(36),
        defaultValue: DataType.UUIDV4,
    })
    declare id: string

    @Column({
        type: DataType.STRING(45),
    })
    declare content: string

    @ForeignKey(() => User)
    @Column
    userId?: number;

    @BelongsTo(() => User)
    author?: Object;

    @CreatedAt
    declare createdAt: Date

    @UpdatedAt
    declare updatedAt: Date
}


export default Blog