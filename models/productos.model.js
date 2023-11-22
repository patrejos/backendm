const execQuery = require('./../helpers/execQuery');
const TYPES = require('tedious').TYPES;

const addProducto = (ProductoData) => {
    const {
        CodProducto,
        NombreProducto,
        DescripcionProducto,
        CategoriaProducto,
        PrecioUnidad,
        CantidadStock,
        FechaIngreso,
        IDProveedor,
    } = ProductoData;
    const query = `
    INSERT INTO [dbo].[Productos] (CodProducto, NombreProducto, DescripcionProducto, CategoriaProducto, PrecioUnidad, CantidadStock, FechaIngreso, IDProveedor)
    VALUES (@CodProducto, @NombreProducto, @DescripcionProducto, @CategoriaProducto, @PrecioUnidad, @CantidadStock, @FechaIngreso, @IDProveedor)
    `;
    const parameters = [
        {name: 'CodProducto', type: TYPES.VarChar, value: CodProducto},
        {name: 'NombreProducto', type: TYPES.VarChar, value: NombreProducto},
        {name: 'DescripcionProducto', type: TYPES.VarChar, value: DescripcionProducto},
        {name: 'CategoriaProducto', type: TYPES.VarChar, value: CategoriaProducto},
        {name: 'PrecioUnidad', type: TYPES.Int, value: PrecioUnidad},
        {name: 'CantidadStock', type: TYPES.Int, value: CantidadStock},
        {name: 'FechaIngreso', type: TYPES.Date, value: FechaIngreso},
        {name: 'IDProveedor', type: TYPES.Int, value: IDProveedor},
    ];


    return execQuery.execWriteCommand(query, parameters)
};



const updateProducto = (ProductoData) => {
    const {
        CodProducto,
        NombreProducto,
        DescripcionProducto,
        CategoriaProducto,
        PrecioUnidad,
        CantidadStock,
        FechaIngreso,
        IDProveedor,
    } = ProductoData;
    const query = `
    UPDATE [dbo].[Productos]
    SET NombreProducto=@NombreProducto, DescripcionProducto=@DescripcionProducto, CategoriaProducto=@CategoriaProducto, PrecioUnidad=@PrecioUnidad, CantidadStock=@CantidadStock, FechaIngreso=@FechaIngreso, IDProveedor=@IDProveedor
    WHERE CodProducto = @CodProducto
    `;
    const parameters = [
        {name: 'CodProducto', type: TYPES.VarChar, value: CodProducto},
        {name: 'NombreProducto', type: TYPES.VarChar, value: NombreProducto},
        {name: 'DescripcionProducto', type: TYPES.VarChar, value: DescripcionProducto},
        {name: 'CategoriaProducto', type: TYPES.VarChar, value: CategoriaProducto},
        {name: 'PrecioUnidad', type: TYPES.Int, value: PrecioUnidad},
        {name: 'CantidadStock', type: TYPES.Int, value: CantidadStock},
        {name: 'FechaIngreso', type: TYPES.Date, value: FechaIngreso},
        {name: 'IDProveedor', type: TYPES.Int, value: IDProveedor},
    ];
    return execQuery.execWriteCommand(query, parameters)
};

const deleteProducto = (CodProducto) => {
    const query = `
    DELETE FROM [dbo].[Productos]
    WHERE CodProducto = @CodProducto
    `
    const parameters = [
        {name: 'CodProducto', type: TYPES.VarChar, value: CodProducto}
    ];
    return execQuery.execWriteCommand(query, parameters);
};

const allProducto = () => {
    const query = `
    SELECT * FROM [dbo].[Productos]
    `;
    return execQuery.execReadCommand(query);
};

const getByCodProducto = (CodProducto) => {
    const query = `
    SELECT * FROM [dbo].[Productos]
    WHERE CodProducto = @CodProducto
    `;
    const parameters = [
        {name: 'CodProducto', type: TYPES.VarChar, value: CodProducto}
    ];
    return execQuery.execReadCommand(query, parameters);
}

module.exports = {
    addProducto,
    updateProducto,
    deleteProducto,
    allProducto,
    getByCodProducto,
}