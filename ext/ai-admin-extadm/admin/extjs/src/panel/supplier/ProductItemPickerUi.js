/*!
 * @license LGPLv3, http://opensource.org/licenses/LGPL-3.0
 * @copyright Aimeos.org, 2015
 */


Ext.ns('MShop.panel.supplier');

// hook product picker into the supplier ItemUi
Ext.ux.ItemRegistry.registerItem('MShop.panel.supplier.ItemUi', 'MShop.panel.supplier.ProductItemPickerUi', {

	xtype : 'MShop.panel.product.itempickerui',
    itemConfig : {
        recordName : 'Supplier_Lists',
        idProperty : 'supplier.lists.id',
        siteidProperty : 'supplier.lists.siteid',
        listDomain : 'supplier',
        listNamePrefix : 'supplier.lists.',
        listTypeIdProperty : 'supplier.lists.type.id',
        listTypeLabelProperty : 'supplier.lists.type.label',
        listTypeControllerName : 'Supplier_Lists_Type',
        listTypeCondition : {
            '&&' : [{
                '==' : {
                    'supplier.lists.type.domain' : 'product'
                }
            }]
        },
        listTypeKey : 'supplier/lists/type/product'
    },
    listConfig : {
        prefix : 'product.'
    }
}, 30);
