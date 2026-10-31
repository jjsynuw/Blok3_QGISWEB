ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([2110378.528201, 6473731.745626, 2127871.535699, 6481683.112671]);
var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_siatka_analiza_15m_1 = new ol.format.GeoJSON();
var features_siatka_analiza_15m_1 = format_siatka_analiza_15m_1.readFeatures(json_siatka_analiza_15m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_analiza_15m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_analiza_15m_1.addFeatures(features_siatka_analiza_15m_1);
var lyr_siatka_analiza_15m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_analiza_15m_1, 
                style: style_siatka_analiza_15m_1,
                popuplayertitle: 'siatka_analiza_15m',
                interactive: true,
    title: 'siatka_analiza_15m<br />\
    <img src="styles/legend/siatka_analiza_15m_1_0.png" /> 0 - 20<br />\
    <img src="styles/legend/siatka_analiza_15m_1_1.png" /> 20 - 40<br />\
    <img src="styles/legend/siatka_analiza_15m_1_2.png" /> 40 - 60<br />\
    <img src="styles/legend/siatka_analiza_15m_1_3.png" /> 60 - 80<br />\
    <img src="styles/legend/siatka_analiza_15m_1_4.png" /> 80 - 100<br />' });
var format_granica_miasta_2 = new ol.format.GeoJSON();
var features_granica_miasta_2 = format_granica_miasta_2.readFeatures(json_granica_miasta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granica_miasta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granica_miasta_2.addFeatures(features_granica_miasta_2);
var lyr_granica_miasta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granica_miasta_2, 
                style: style_granica_miasta_2,
                popuplayertitle: 'granica_miasta',
                interactive: false,
                title: '<img src="styles/legend/granica_miasta_2.png" /> granica_miasta'
            });
var format_granica_dzielnic_3 = new ol.format.GeoJSON();
var features_granica_dzielnic_3 = format_granica_dzielnic_3.readFeatures(json_granica_dzielnic_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granica_dzielnic_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granica_dzielnic_3.addFeatures(features_granica_dzielnic_3);
var lyr_granica_dzielnic_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granica_dzielnic_3, 
                style: style_granica_dzielnic_3,
                popuplayertitle: 'granica_dzielnic',
                interactive: false,
                title: '<img src="styles/legend/granica_dzielnic_3.png" /> granica_dzielnic'
            });
var format_poi_zielen_4 = new ol.format.GeoJSON();
var features_poi_zielen_4 = format_poi_zielen_4.readFeatures(json_poi_zielen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_zielen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_zielen_4.addFeatures(features_poi_zielen_4);
var lyr_poi_zielen_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_zielen_4, 
                style: style_poi_zielen_4,
                popuplayertitle: 'poi_zielen',
                interactive: false,
                title: '<img src="styles/legend/poi_zielen_4.png" /> poi_zielen'
            });
var format_poi_transport_5 = new ol.format.GeoJSON();
var features_poi_transport_5 = format_poi_transport_5.readFeatures(json_poi_transport_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_transport_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_transport_5.addFeatures(features_poi_transport_5);
var lyr_poi_transport_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_transport_5, 
                style: style_poi_transport_5,
                popuplayertitle: 'poi_transport',
                interactive: false,
                title: '<img src="styles/legend/poi_transport_5.png" /> poi_transport'
            });
var format_poi_handel_6 = new ol.format.GeoJSON();
var features_poi_handel_6 = format_poi_handel_6.readFeatures(json_poi_handel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_handel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_handel_6.addFeatures(features_poi_handel_6);
var lyr_poi_handel_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_handel_6, 
                style: style_poi_handel_6,
                popuplayertitle: 'poi_handel',
                interactive: false,
                title: '<img src="styles/legend/poi_handel_6.png" /> poi_handel'
            });
var format_poi_zdrowie_7 = new ol.format.GeoJSON();
var features_poi_zdrowie_7 = format_poi_zdrowie_7.readFeatures(json_poi_zdrowie_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_zdrowie_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_zdrowie_7.addFeatures(features_poi_zdrowie_7);
var lyr_poi_zdrowie_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_zdrowie_7, 
                style: style_poi_zdrowie_7,
                popuplayertitle: 'poi_zdrowie',
                interactive: false,
                title: '<img src="styles/legend/poi_zdrowie_7.png" /> poi_zdrowie'
            });
var format_poi_edukacja_8 = new ol.format.GeoJSON();
var features_poi_edukacja_8 = format_poi_edukacja_8.readFeatures(json_poi_edukacja_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_edukacja_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_edukacja_8.addFeatures(features_poi_edukacja_8);
var lyr_poi_edukacja_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_edukacja_8, 
                style: style_poi_edukacja_8,
                popuplayertitle: 'poi_edukacja',
                interactive: false,
                title: '<img src="styles/legend/poi_edukacja_8.png" /> poi_edukacja'
            });
var group_POI = new ol.layer.Group({
                                layers: [lyr_poi_zielen_4,lyr_poi_transport_5,lyr_poi_handel_6,lyr_poi_zdrowie_7,lyr_poi_edukacja_8,],
                                fold: 'open',
                                title: 'POI'});

lyr_OpenTopoMap_0.setVisible(true);lyr_siatka_analiza_15m_1.setVisible(true);lyr_granica_miasta_2.setVisible(true);lyr_granica_dzielnic_3.setVisible(true);lyr_poi_zielen_4.setVisible(true);lyr_poi_transport_5.setVisible(true);lyr_poi_handel_6.setVisible(true);lyr_poi_zdrowie_7.setVisible(true);lyr_poi_edukacja_8.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_siatka_analiza_15m_1,lyr_granica_miasta_2,lyr_granica_dzielnic_3,group_POI];
lyr_siatka_analiza_15m_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'id_2': 'id_2', 'left_2': 'left_2', 'top_2': 'top_2', 'right_2': 'right_2', 'bottom_2': 'bottom_2', 'row_index_2': 'row_index_2', 'col_index_2': 'col_index_2', 'cnt_edukacja': 'cnt_edukacja', 'cnt_handel': 'cnt_handel', 'cnt_transport': 'cnt_transport', 'cnt_zdrowie': 'cnt_zdrowie', 'cnt_zielen': 'cnt_zielen', 'index_15m': 'index_15m', 'index_15m_bonus': 'index_15m_bonus', 'popup_html': 'popup_html', });
lyr_granica_miasta_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', });
lyr_granica_dzielnic_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', });
lyr_poi_zielen_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'nazwa_dzielnicy': 'nazwa_dzielnicy', 'kategoria': 'kategoria', });
lyr_poi_transport_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'nazwa_dzielnicy': 'nazwa_dzielnicy', 'kategoria': 'kategoria', });
lyr_poi_handel_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'nazwa_dzielnicy': 'nazwa_dzielnicy', 'kategoria': 'kategoria', });
lyr_poi_zdrowie_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'nazwa_dzielnicy': 'nazwa_dzielnicy', 'kategoria': 'kategoria', });
lyr_poi_edukacja_8.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'nazwa_dzielnicy': 'nazwa_dzielnicy', 'kategoria': 'kategoria', });
lyr_siatka_analiza_15m_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'id_2': 'TextEdit', 'left_2': 'TextEdit', 'top_2': 'TextEdit', 'right_2': 'TextEdit', 'bottom_2': 'TextEdit', 'row_index_2': 'TextEdit', 'col_index_2': 'TextEdit', 'cnt_edukacja': 'TextEdit', 'cnt_handel': 'TextEdit', 'cnt_transport': 'TextEdit', 'cnt_zdrowie': 'TextEdit', 'cnt_zielen': 'TextEdit', 'index_15m': 'TextEdit', 'index_15m_bonus': 'TextEdit', 'popup_html': '', });
lyr_granica_miasta_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', });
lyr_granica_dzielnic_3.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', });
lyr_poi_zielen_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'nazwa_dzielnicy': 'TextEdit', 'kategoria': 'TextEdit', });
lyr_poi_transport_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'nazwa_dzielnicy': 'TextEdit', 'kategoria': 'TextEdit', });
lyr_poi_handel_6.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'nazwa_dzielnicy': 'TextEdit', 'kategoria': 'TextEdit', });
lyr_poi_zdrowie_7.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'nazwa_dzielnicy': 'TextEdit', 'kategoria': 'TextEdit', });
lyr_poi_edukacja_8.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'nazwa_dzielnicy': 'TextEdit', 'kategoria': 'TextEdit', });
lyr_siatka_analiza_15m_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'id_2': 'hidden field', 'left_2': 'hidden field', 'top_2': 'hidden field', 'right_2': 'hidden field', 'bottom_2': 'hidden field', 'row_index_2': 'hidden field', 'col_index_2': 'hidden field', 'cnt_edukacja': 'hidden field', 'cnt_handel': 'hidden field', 'cnt_transport': 'hidden field', 'cnt_zdrowie': 'hidden field', 'cnt_zielen': 'hidden field', 'index_15m': 'hidden field', 'index_15m_bonus': 'hidden field', 'popup_html': 'no label', });
lyr_granica_miasta_2.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'name': 'hidden field', });
lyr_granica_dzielnic_3.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'name': 'hidden field', });
lyr_poi_zielen_4.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'name': 'hidden field', 'nazwa_dzielnicy': 'hidden field', 'kategoria': 'hidden field', });
lyr_poi_transport_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'nazwa_dzielnicy': 'no label', 'kategoria': 'no label', });
lyr_poi_handel_6.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'name': 'hidden field', 'nazwa_dzielnicy': 'hidden field', 'kategoria': 'hidden field', });
lyr_poi_zdrowie_7.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'nazwa_dzielnicy': 'no label', 'kategoria': 'no label', });
lyr_poi_edukacja_8.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'name': 'hidden field', 'nazwa_dzielnicy': 'hidden field', 'kategoria': 'hidden field', });
lyr_poi_edukacja_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});