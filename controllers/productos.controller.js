const productosRoute = require('express').Router();
const productosModel = require('../models/productos.model');

productosRoute.get('/', async(req, res) => {
    productosModel.allProducto()
    .then(data => {
        res.status(200).json({ data });
    })
    .catch(error => {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error });
    });
});

productosRoute.get('/:id', async (req, res) => {
    const {id:CodProducto} = req.params;
    productosModel.getByCodProducto(CodProducto)
    .then(data => {
        if(data.length > 0) {
            res.status(200).json ({ data: {...data[0] } } );
        }
        else {
            res.status(404).json ({ error: 'No se encuentra el producto'});
        }
    })
    .catch(error => {
        res.status(500).json({error});
});
});

productosRoute.post('/', async (req, res) => {
    const {
        CodProducto,
        NombreProducto,
        DescripcionProducto,
        CategoriaProducto,
        PrecioUnidad,
        CantidadStock,
        FechaIngreso,
        IDProveedor,
    } = req.body;
    productosModel.addProducto({
        CodProducto,
        NombreProducto,
        DescripcionProducto,
        CategoriaProducto,
        PrecioUnidad,
        CantidadStock,
        FechaIngreso,
        IDProveedor,
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
                CodProducto,
            },
        });
    })
    .catch(error => {
        console.log(req.body)
        console.error('Error al crear productos:', error);
        res.status(500).json({error})
    });
});


productosRoute.put('/', async (req, res) => {
    const {
        CodProducto,
        NombreProducto,
        DescripcionProducto,
        CategoriaProducto,
        PrecioUnidad,
        CantidadStock,
        FechaIngreso,
        IDProveedor,
    } = req.body;
    productosModel.updateProducto({
        CodProducto,
        NombreProducto,
        DescripcionProducto,
        CategoriaProducto,
        PrecioUnidad,
        CantidadStock,
        FechaIngreso,
        IDProveedor,
    })
    .then((rowCount, more) => {
        res.status(200).json({
            data: {
                rowCount,
                more,
                CodProducto,
            },
        });
    })
    .catch(error => {
        console.error('Error al crear productos:', error);
        res.status(500).json({error})
    });
});


productosRoute.delete('/', async (req, res) => {
    const { CodProducto } = req.body;
    productosModel.deleteProducto(CodProducto)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more });
    })
    .catch(error => {
        res.status(500).json({ error });
    })
});

module.exports = productosRoute;