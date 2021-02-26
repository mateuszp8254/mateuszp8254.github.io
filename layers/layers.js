var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_koluszki_sn_m_1 = new ol.format.GeoJSON();
var features_koluszki_sn_m_1 = format_koluszki_sn_m_1.readFeatures(json_koluszki_sn_m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_koluszki_sn_m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_koluszki_sn_m_1.addFeatures(features_koluszki_sn_m_1);
var lyr_koluszki_sn_m_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_koluszki_sn_m_1, 
                style: style_koluszki_sn_m_1,
                interactive: true,
                title: '<img src="styles/legend/koluszki_sn_m_1.png" /> koluszki_sn_m'
            });

lyr_OSMStandard_0.setVisible(true);lyr_koluszki_sn_m_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_koluszki_sn_m_1];
lyr_koluszki_sn_m_1.set('fieldAliases', {'gml_id': 'gml_id', 'lokalnyId': 'lokalnyId', 'przestrzen': 'przestrzen', 'wersjaId': 'wersjaId', 'czyObiektB': 'czyObiektB', 'x_kod': 'x_kod', 'x_skrKarto': 'x_skrKarto', 'x_katDoklG': 'x_katDoklG', 'x_zrodloDa': 'x_zrodloDa', 'x_zrodlo_1': 'x_zrodlo_1', 'x_katIstni': 'x_katIstni', 'x_rodzajRe': 'x_rodzajRe', 'x_aktualno': 'x_aktualno', 'x_aktual_1': 'x_aktual_1', 'poczatekWe': 'poczatekWe', 'x_dataUtwo': 'x_dataUtwo', 'x_kodKarto': 'x_kodKarto', 'x_kodKar_1': 'x_kodKar_1', 'x_kodKar_2': 'x_kodKar_2', 'x_kodKar_3': 'x_kodKar_3', 'x_kodKar_4': 'x_kodKar_4', 'x_kodKar_5': 'x_kodKar_5', 'x_kodKar_6': 'x_kodKar_6', 'rodzaj': 'rodzaj', 'x_doklGeom': 'x_doklGeom', 'x_doklGe_1': 'x_doklGe_1', 'x_informDo': 'x_informDo', 'layer': 'layer', 'path': 'path', });
lyr_koluszki_sn_m_1.set('fieldImages', {'gml_id': 'TextEdit', 'lokalnyId': 'TextEdit', 'przestrzen': 'TextEdit', 'wersjaId': 'TextEdit', 'czyObiektB': 'Range', 'x_kod': 'TextEdit', 'x_skrKarto': 'TextEdit', 'x_katDoklG': 'TextEdit', 'x_zrodloDa': 'TextEdit', 'x_zrodlo_1': 'TextEdit', 'x_katIstni': 'TextEdit', 'x_rodzajRe': 'TextEdit', 'x_aktualno': 'TextEdit', 'x_aktual_1': 'TextEdit', 'poczatekWe': 'TextEdit', 'x_dataUtwo': 'TextEdit', 'x_kodKarto': 'TextEdit', 'x_kodKar_1': 'TextEdit', 'x_kodKar_2': 'TextEdit', 'x_kodKar_3': 'TextEdit', 'x_kodKar_4': 'TextEdit', 'x_kodKar_5': 'TextEdit', 'x_kodKar_6': 'TextEdit', 'rodzaj': 'TextEdit', 'x_doklGeom': 'TextEdit', 'x_doklGe_1': 'TextEdit', 'x_informDo': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_koluszki_sn_m_1.set('fieldLabels', {'gml_id': 'no label', 'lokalnyId': 'no label', 'przestrzen': 'no label', 'wersjaId': 'no label', 'czyObiektB': 'no label', 'x_kod': 'no label', 'x_skrKarto': 'no label', 'x_katDoklG': 'no label', 'x_zrodloDa': 'no label', 'x_zrodlo_1': 'no label', 'x_katIstni': 'no label', 'x_rodzajRe': 'no label', 'x_aktualno': 'no label', 'x_aktual_1': 'no label', 'poczatekWe': 'no label', 'x_dataUtwo': 'no label', 'x_kodKarto': 'no label', 'x_kodKar_1': 'no label', 'x_kodKar_2': 'no label', 'x_kodKar_3': 'no label', 'x_kodKar_4': 'no label', 'x_kodKar_5': 'no label', 'x_kodKar_6': 'no label', 'rodzaj': 'no label', 'x_doklGeom': 'no label', 'x_doklGe_1': 'no label', 'x_informDo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_koluszki_sn_m_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});