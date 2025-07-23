ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102332").setExtent([330132.396147, 4260661.999738, 371756.897585, 4282086.375478]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Freguesias_Grupo_Central_2 = new ol.format.GeoJSON();
var features_Freguesias_Grupo_Central_2 = format_Freguesias_Grupo_Central_2.readFeatures(json_Freguesias_Grupo_Central_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Freguesias_Grupo_Central_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freguesias_Grupo_Central_2.addFeatures(features_Freguesias_Grupo_Central_2);
var lyr_Freguesias_Grupo_Central_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freguesias_Grupo_Central_2, 
                style: style_Freguesias_Grupo_Central_2,
                popuplayertitle: 'Freguesias_Grupo_Central',
                interactive: true,
                title: '<img src="styles/legend/Freguesias_Grupo_Central_2.png" /> Freguesias_Grupo_Central'
            });
var format_Redesdeagua_3 = new ol.format.GeoJSON();
var features_Redesdeagua_3 = format_Redesdeagua_3.readFeatures(json_Redesdeagua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Redesdeagua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redesdeagua_3.addFeatures(features_Redesdeagua_3);
var lyr_Redesdeagua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redesdeagua_3, 
                style: style_Redesdeagua_3,
                popuplayertitle: 'Redes de agua',
                interactive: false,
    title: 'Redes de agua<br />\
    <img src="styles/legend/Redesdeagua_3_0.png" /> Alto dos Espalhafatos / Ribeirinha<br />\
    <img src="styles/legend/Redesdeagua_3_1.png" /> Caixa do Figueiredo / Chão Frio<br />\
    <img src="styles/legend/Redesdeagua_3_2.png" /> Castelo Branco<br />\
    <img src="styles/legend/Redesdeagua_3_3.png" /> Chão Frio<br />\
    <img src="styles/legend/Redesdeagua_3_4.png" /> Covões / Canada Larga<br />\
    <img src="styles/legend/Redesdeagua_3_5.png" /> Estrada da Caldeira / Facho<br />\
    <img src="styles/legend/Redesdeagua_3_6.png" /> Fajã<br />\
    <img src="styles/legend/Redesdeagua_3_7.png" /> Feteira de Cima<br />\
    <img src="styles/legend/Redesdeagua_3_8.png" /> Flamengos<br />\
    <img src="styles/legend/Redesdeagua_3_9.png" /> Lombega<br />\
    <img src="styles/legend/Redesdeagua_3_10.png" /> Matriz / Conceição<br />\
    <img src="styles/legend/Redesdeagua_3_11.png" /> Miragaia/Atrás da Ladeira<br />\
    <img src="styles/legend/Redesdeagua_3_12.png" /> Norte Pequeno<br />\
    <img src="styles/legend/Redesdeagua_3_13.png" /> Praia do Norte<br />\
    <img src="styles/legend/Redesdeagua_3_14.png" /> Ribeira do Cabo<br />\
    <img src="styles/legend/Redesdeagua_3_15.png" /> Ribeira Funda<br />\
    <img src="styles/legend/Redesdeagua_3_16.png" /> Salão / Cedros<br />\
    <img src="styles/legend/Redesdeagua_3_17.png" /> Santa Bárbara / Cabeço das Moças<br />\
    <img src="styles/legend/Redesdeagua_3_18.png" /> Trupes<br />\
    <img src="styles/legend/Redesdeagua_3_19.png" /> Varadouro<br />' });
var format_Outrasinfraestruturas_4 = new ol.format.GeoJSON();
var features_Outrasinfraestruturas_4 = format_Outrasinfraestruturas_4.readFeatures(json_Outrasinfraestruturas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Outrasinfraestruturas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outrasinfraestruturas_4.addFeatures(features_Outrasinfraestruturas_4);
var lyr_Outrasinfraestruturas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outrasinfraestruturas_4, 
                style: style_Outrasinfraestruturas_4,
                popuplayertitle: 'Outras infra-estruturas',
                interactive: true,
                title: '<img src="styles/legend/Outrasinfraestruturas_4.png" /> Outras infra-estruturas'
            });
var format_Reservatorios_5 = new ol.format.GeoJSON();
var features_Reservatorios_5 = format_Reservatorios_5.readFeatures(json_Reservatorios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Reservatorios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservatorios_5.addFeatures(features_Reservatorios_5);
var lyr_Reservatorios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservatorios_5, 
                style: style_Reservatorios_5,
                popuplayertitle: 'Reservatorios',
                interactive: true,
    title: 'Reservatorios<br />\
    <img src="styles/legend/Reservatorios_5_0.png" /> Reservatorio pequeno<br />\
    <img src="styles/legend/Reservatorios_5_1.png" /> Reservatorio medio<br />\
    <img src="styles/legend/Reservatorios_5_2.png" /> Grande reservatorio<br />' });
var format_NascentesOutras_6 = new ol.format.GeoJSON();
var features_NascentesOutras_6 = format_NascentesOutras_6.readFeatures(json_NascentesOutras_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_NascentesOutras_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NascentesOutras_6.addFeatures(features_NascentesOutras_6);
var lyr_NascentesOutras_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NascentesOutras_6, 
                style: style_NascentesOutras_6,
                popuplayertitle: 'Nascentes Outras',
                interactive: true,
                title: '<img src="styles/legend/NascentesOutras_6.png" /> Nascentes Outras'
            });
var format_NascentesPrincipais_7 = new ol.format.GeoJSON();
var features_NascentesPrincipais_7 = format_NascentesPrincipais_7.readFeatures(json_NascentesPrincipais_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_NascentesPrincipais_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NascentesPrincipais_7.addFeatures(features_NascentesPrincipais_7);
var lyr_NascentesPrincipais_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NascentesPrincipais_7, 
                style: style_NascentesPrincipais_7,
                popuplayertitle: 'Nascentes Principais',
                interactive: true,
    title: 'Nascentes Principais<br />\
    <img src="styles/legend/NascentesPrincipais_7_0.png" /> Aguas Claras<br />\
    <img src="styles/legend/NascentesPrincipais_7_1.png" /> Alto do Chao<br />\
    <img src="styles/legend/NascentesPrincipais_7_2.png" /> Alto do Inverno<br />\
    <img src="styles/legend/NascentesPrincipais_7_3.png" /> Areias<br />\
    <img src="styles/legend/NascentesPrincipais_7_4.png" /> Castelhano<br />\
    <img src="styles/legend/NascentesPrincipais_7_5.png" /> Fonte dos Namorados<br />\
    <img src="styles/legend/NascentesPrincipais_7_6.png" /> Lopo<br />\
    <img src="styles/legend/NascentesPrincipais_7_7.png" /> Praia do Norte<br />' });
var format_Furos_8 = new ol.format.GeoJSON();
var features_Furos_8 = format_Furos_8.readFeatures(json_Furos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Furos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Furos_8.addFeatures(features_Furos_8);
var lyr_Furos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Furos_8, 
                style: style_Furos_8,
                popuplayertitle: 'Furos',
                interactive: true,
    title: 'Furos<br />\
    <img src="styles/legend/Furos_8_0.png" /> Ativa<br />\
    <img src="styles/legend/Furos_8_1.png" /> Inativa<br />' });
var group_Nascentes = new ol.layer.Group({
                                layers: [lyr_NascentesOutras_6,lyr_NascentesPrincipais_7,],
                                fold: 'close',
                                title: 'Nascentes'});
var group_OSM = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OSM'});
var group_Masse_eau = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Masse_eau'});
var group_Faille = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Faille'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(false);lyr_Freguesias_Grupo_Central_2.setVisible(false);lyr_Redesdeagua_3.setVisible(true);lyr_Outrasinfraestruturas_4.setVisible(true);lyr_Reservatorios_5.setVisible(true);lyr_NascentesOutras_6.setVisible(true);lyr_NascentesPrincipais_7.setVisible(true);lyr_Furos_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Freguesias_Grupo_Central_2,lyr_Redesdeagua_3,lyr_Outrasinfraestruturas_4,lyr_Reservatorios_5,group_Nascentes,lyr_Furos_8];
lyr_Freguesias_Grupo_Central_2.set('fieldAliases', {'DICOFRE': 'DICOFRE', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'ILHA': 'ILHA', 'FONTE_V3': 'FONTE_V3', 'AREA_V3_HA': 'AREA_V3_HA', });
lyr_Redesdeagua_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TEMA': 'TEMA', 'DESIGNACAO': 'DESIGNACAO', 'COD_INSAAR': 'COD_INSAAR', 'ENT_GESTOR': 'ENT_GESTOR', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Outrasinfraestruturas_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Designaça': 'Designaça', 'Entrada': 'Entrada', 'Saida': 'Saida', 'Contador': 'Contador', 'popup_html': 'popup_html', 'popup1': 'popup1', 'popup2': 'popup2', });
lyr_Reservatorios_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Nome', 'Entrada': 'Entrada', 'Saida': 'Saida', 'Capacidade': 'Capacidade', 'Categoria': 'Categoria', 'Cloragem': 'Cloragem', 'Contador': 'Contador', 'Comentario': 'Comentario', 'popup_html': 'popup_html', 'popup2': 'popup2', 'popup3': 'popup3', });
lyr_NascentesOutras_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TEMA': 'TEMA', 'DESIGNACAO': 'DESIGNACAO', 'SIST_AQUIF': 'SIST_AQUIF', 'USO': 'USO', 'Q_M3_D': 'Q_M3_D', 'PH': 'PH', 'T_COL': 'T_COL', 'CONDUCT': 'CONDUCT', 'CO2_LIVRE': 'CO2_LIVRE', 'ALCALINIDA': 'ALCALINIDA', 'SIO2': 'SIO2', 'NA': 'NA', 'K': 'K', 'CA': 'CA', 'MG': 'MG', 'NH4': 'NH4', 'LI': 'LI', 'FE': 'FE', 'AL': 'AL', 'SO4': 'SO4', 'CL': 'CL', 'F': 'F', 'NO3': 'NO3', 'LI_1': 'LI_1', 'SC': 'SC', 'TI': 'TI', 'V': 'V', 'MN': 'MN', 'FE_1': 'FE_1', 'CO': 'CO', 'NI': 'NI', 'CU': 'CU', 'ZN': 'ZN', 'AS_': 'AS_', 'SE': 'SE', 'BR': 'BR', 'RB': 'RB', 'SR': 'SR', 'Y': 'Y', 'NB': 'NB', 'MO': 'MO', 'CD': 'CD', 'SN': 'SN', 'I': 'I', 'CS': 'CS', 'BA': 'BA', 'LA': 'LA', 'CE': 'CE', 'ND': 'ND', 'TA': 'TA', 'W': 'W', 'PB': 'PB', 'TH': 'TH', 'U': 'U', 'TRATAMENTO': 'TRATAMENTO', 'ENTIDADE': 'ENTIDADE', 'DATA': 'DATA', 'ENVOLVENTE': 'ENVOLVENTE', 'Q_MIN': 'Q_MIN', 'Q_MAX': 'Q_MAX', 'Q_MED': 'Q_MED', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'RuleID_MON': 'RuleID_MON', 'RuleID_INS': 'RuleID_INS', });
lyr_NascentesPrincipais_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TEMA': 'TEMA', 'DESIGNACAO': 'DESIGNACAO', 'REFERENCIA': 'REFERENCIA', 'ALTITUDE': 'ALTITUDE', 'CAUDAL': 'CAUDAL', 'GESTOR': 'GESTOR', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'RuleID_MON': 'RuleID_MON', 'RuleID_INS': 'RuleID_INS', 'OBS': 'OBS', });
lyr_Furos_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'id_unico': 'id_unico', 'designacao': 'designacao', 'situacao': 'situacao', 'X WGS84': 'X WGS84', 'Y WGS84': 'Y WGS84', 'Z ': 'Z ', 'Prof Agua': 'Prof Agua', 'Cote_Piezo': 'Cote_Piezo', 'freguesia': 'freguesia', 'freguesia deservida': 'freguesia deservida', 'Comentario': 'Comentario', 'popup': 'popup', 'popup1': 'popup1', 'popup2': 'popup2', });
lyr_Freguesias_Grupo_Central_2.set('fieldImages', {'DICOFRE': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'ILHA': 'TextEdit', 'FONTE_V3': 'TextEdit', 'AREA_V3_HA': 'TextEdit', });
lyr_Redesdeagua_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'TEMA': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'COD_INSAAR': 'TextEdit', 'ENT_GESTOR': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Outrasinfraestruturas_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Designaça': 'TextEdit', 'Entrada': 'TextEdit', 'Saida': 'TextEdit', 'Contador': 'CheckBox', 'popup_html': 'TextEdit', 'popup1': 'TextEdit', 'popup2': 'TextEdit', });
lyr_Reservatorios_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', 'Entrada': 'TextEdit', 'Saida': 'TextEdit', 'Capacidade': 'TextEdit', 'Categoria': 'TextEdit', 'Cloragem': 'CheckBox', 'Contador': 'CheckBox', 'Comentario': 'TextEdit', 'popup_html': 'TextEdit', 'popup2': 'TextEdit', 'popup3': 'TextEdit', });
lyr_NascentesOutras_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'TEMA': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'SIST_AQUIF': 'TextEdit', 'USO': 'TextEdit', 'Q_M3_D': 'TextEdit', 'PH': 'TextEdit', 'T_COL': 'TextEdit', 'CONDUCT': 'TextEdit', 'CO2_LIVRE': 'TextEdit', 'ALCALINIDA': 'TextEdit', 'SIO2': 'TextEdit', 'NA': 'TextEdit', 'K': 'TextEdit', 'CA': 'TextEdit', 'MG': 'TextEdit', 'NH4': 'TextEdit', 'LI': 'TextEdit', 'FE': 'TextEdit', 'AL': 'TextEdit', 'SO4': 'TextEdit', 'CL': 'TextEdit', 'F': 'TextEdit', 'NO3': 'TextEdit', 'LI_1': 'TextEdit', 'SC': 'TextEdit', 'TI': 'TextEdit', 'V': 'TextEdit', 'MN': 'TextEdit', 'FE_1': 'TextEdit', 'CO': 'TextEdit', 'NI': 'TextEdit', 'CU': 'TextEdit', 'ZN': 'TextEdit', 'AS_': 'TextEdit', 'SE': 'TextEdit', 'BR': 'TextEdit', 'RB': 'TextEdit', 'SR': 'TextEdit', 'Y': 'TextEdit', 'NB': 'TextEdit', 'MO': 'TextEdit', 'CD': 'TextEdit', 'SN': 'TextEdit', 'I': 'TextEdit', 'CS': 'TextEdit', 'BA': 'TextEdit', 'LA': 'TextEdit', 'CE': 'TextEdit', 'ND': 'TextEdit', 'TA': 'TextEdit', 'W': 'TextEdit', 'PB': 'TextEdit', 'TH': 'TextEdit', 'U': 'TextEdit', 'TRATAMENTO': 'TextEdit', 'ENTIDADE': 'TextEdit', 'DATA': 'TextEdit', 'ENVOLVENTE': 'TextEdit', 'Q_MIN': 'TextEdit', 'Q_MAX': 'TextEdit', 'Q_MED': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'RuleID_MON': 'TextEdit', 'RuleID_INS': 'TextEdit', });
lyr_NascentesPrincipais_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'TEMA': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'REFERENCIA': 'TextEdit', 'ALTITUDE': 'TextEdit', 'CAUDAL': 'TextEdit', 'GESTOR': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'RuleID_MON': 'TextEdit', 'RuleID_INS': 'TextEdit', 'OBS': 'TextEdit', });
lyr_Furos_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'id_unico': 'TextEdit', 'designacao': 'TextEdit', 'situacao': 'TextEdit', 'X WGS84': 'TextEdit', 'Y WGS84': 'TextEdit', 'Z ': 'TextEdit', 'Prof Agua': 'TextEdit', 'Cote_Piezo': 'Range', 'freguesia': 'TextEdit', 'freguesia deservida': 'TextEdit', 'Comentario': 'TextEdit', 'popup': 'TextEdit', 'popup1': 'TextEdit', 'popup2': 'TextEdit', });
lyr_Freguesias_Grupo_Central_2.set('fieldLabels', {'DICOFRE': 'hidden field', 'FREGUESIA': 'inline label - visible with data', 'CONCELHO': 'hidden field', 'ILHA': 'hidden field', 'FONTE_V3': 'hidden field', 'AREA_V3_HA': 'inline label - visible with data', });
lyr_Redesdeagua_3.set('fieldLabels', {'OBJECTID': 'no label', 'TEMA': 'no label', 'DESIGNACAO': 'no label', 'COD_INSAAR': 'no label', 'ENT_GESTOR': 'no label', 'FREGUESIA': 'no label', 'CONCELHO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Outrasinfraestruturas_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Designaça': 'inline label - visible with data', 'Entrada': 'inline label - visible with data', 'Saida': 'inline label - visible with data', 'Contador': 'inline label - visible with data', 'popup_html': 'no label', 'popup1': 'no label', 'popup2': 'no label', });
lyr_Reservatorios_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', 'Entrada': 'inline label - visible with data', 'Saida': 'inline label - visible with data', 'Capacidade': 'hidden field', 'Categoria': 'hidden field', 'Cloragem': 'inline label - visible with data', 'Contador': 'inline label - visible with data', 'Comentario': 'header label - visible with data', 'popup_html': 'no label', 'popup2': 'no label', 'popup3': 'no label', });
lyr_NascentesOutras_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'TEMA': 'hidden field', 'DESIGNACAO': 'inline label - visible with data', 'SIST_AQUIF': 'inline label - visible with data', 'USO': 'hidden field', 'Q_M3_D': 'inline label - visible with data', 'PH': 'hidden field', 'T_COL': 'hidden field', 'CONDUCT': 'hidden field', 'CO2_LIVRE': 'hidden field', 'ALCALINIDA': 'hidden field', 'SIO2': 'hidden field', 'NA': 'hidden field', 'K': 'hidden field', 'CA': 'hidden field', 'MG': 'hidden field', 'NH4': 'hidden field', 'LI': 'hidden field', 'FE': 'hidden field', 'AL': 'hidden field', 'SO4': 'hidden field', 'CL': 'hidden field', 'F': 'hidden field', 'NO3': 'hidden field', 'LI_1': 'hidden field', 'SC': 'hidden field', 'TI': 'hidden field', 'V': 'hidden field', 'MN': 'hidden field', 'FE_1': 'hidden field', 'CO': 'hidden field', 'NI': 'hidden field', 'CU': 'hidden field', 'ZN': 'hidden field', 'AS_': 'hidden field', 'SE': 'hidden field', 'BR': 'hidden field', 'RB': 'hidden field', 'SR': 'hidden field', 'Y': 'hidden field', 'NB': 'hidden field', 'MO': 'hidden field', 'CD': 'hidden field', 'SN': 'hidden field', 'I': 'hidden field', 'CS': 'hidden field', 'BA': 'hidden field', 'LA': 'hidden field', 'CE': 'hidden field', 'ND': 'hidden field', 'TA': 'hidden field', 'W': 'hidden field', 'PB': 'hidden field', 'TH': 'hidden field', 'U': 'hidden field', 'TRATAMENTO': 'hidden field', 'ENTIDADE': 'hidden field', 'DATA': 'hidden field', 'ENVOLVENTE': 'hidden field', 'Q_MIN': 'hidden field', 'Q_MAX': 'hidden field', 'Q_MED': 'hidden field', 'POINT_X': 'inline label - visible with data', 'POINT_Y': 'inline label - visible with data', 'FREGUESIA': 'inline label - visible with data', 'CONCELHO': 'hidden field', 'RuleID_MON': 'hidden field', 'RuleID_INS': 'hidden field', });
lyr_NascentesPrincipais_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'TEMA': 'hidden field', 'DESIGNACAO': 'inline label - visible with data', 'REFERENCIA': 'inline label - visible with data', 'ALTITUDE': 'inline label - always visible', 'CAUDAL': 'hidden field', 'GESTOR': 'hidden field', 'POINT_X': 'inline label - visible with data', 'POINT_Y': 'inline label - visible with data', 'FREGUESIA': 'inline label - visible with data', 'CONCELHO': 'hidden field', 'RuleID_MON': 'hidden field', 'RuleID_INS': 'hidden field', 'OBS': 'hidden field', });
lyr_Furos_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'id_unico': 'inline label - visible with data', 'designacao': 'inline label - visible with data', 'situacao': 'hidden field', 'X WGS84': 'inline label - visible with data', 'Y WGS84': 'inline label - visible with data', 'Z ': 'inline label - visible with data', 'Prof Agua': 'inline label - visible with data', 'Cote_Piezo': 'hidden field', 'freguesia': 'inline label - visible with data', 'freguesia deservida': 'hidden field', 'Comentario': 'header label - visible with data', 'popup': 'no label', 'popup1': 'no label', 'popup2': 'no label', });
lyr_Furos_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});