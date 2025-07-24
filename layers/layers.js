ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:102332").setExtent([332920.880333, 4261442.189271, 369701.033434, 4282227.611927]);
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
var format_SistemasaquiferosFaial_2 = new ol.format.GeoJSON();
var features_SistemasaquiferosFaial_2 = format_SistemasaquiferosFaial_2.readFeatures(json_SistemasaquiferosFaial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_SistemasaquiferosFaial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SistemasaquiferosFaial_2.addFeatures(features_SistemasaquiferosFaial_2);
var lyr_SistemasaquiferosFaial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SistemasaquiferosFaial_2, 
                style: style_SistemasaquiferosFaial_2,
                popuplayertitle: 'Sistemas aquiferos Faial',
                interactive: true,
    title: 'Sistemas aquiferos Faial<br />\
    <img src="styles/legend/SistemasaquiferosFaial_2_0.png" /> Caldeira<br />\
    <img src="styles/legend/SistemasaquiferosFaial_2_1.png" /> Capelo<br />\
    <img src="styles/legend/SistemasaquiferosFaial_2_2.png" /> Cedros - Castelo Branco<br />\
    <img src="styles/legend/SistemasaquiferosFaial_2_3.png" /> Flamengos - Horta<br />\
    <img src="styles/legend/SistemasaquiferosFaial_2_4.png" /> Lomba - Alto da Cruz<br />\
    <img src="styles/legend/SistemasaquiferosFaial_2_5.png" /> Pedra-pomes da Caldeira<br />\
    <img src="styles/legend/SistemasaquiferosFaial_2_6.png" /> Pedro Miguel<br />\
    <img src="styles/legend/SistemasaquiferosFaial_2_7.png" /> Ribeirinha<br />' });
var format_Freguesias_Grupo_Central_3 = new ol.format.GeoJSON();
var features_Freguesias_Grupo_Central_3 = format_Freguesias_Grupo_Central_3.readFeatures(json_Freguesias_Grupo_Central_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Freguesias_Grupo_Central_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Freguesias_Grupo_Central_3.addFeatures(features_Freguesias_Grupo_Central_3);
var lyr_Freguesias_Grupo_Central_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Freguesias_Grupo_Central_3, 
                style: style_Freguesias_Grupo_Central_3,
                popuplayertitle: 'Freguesias_Grupo_Central',
                interactive: true,
                title: '<img src="styles/legend/Freguesias_Grupo_Central_3.png" /> Freguesias_Grupo_Central'
            });
var format_Baciashidrograficas_4 = new ol.format.GeoJSON();
var features_Baciashidrograficas_4 = format_Baciashidrograficas_4.readFeatures(json_Baciashidrograficas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Baciashidrograficas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Baciashidrograficas_4.addFeatures(features_Baciashidrograficas_4);
var lyr_Baciashidrograficas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Baciashidrograficas_4, 
                style: style_Baciashidrograficas_4,
                popuplayertitle: 'Bacias hidrograficas',
                interactive: true,
                title: '<img src="styles/legend/Baciashidrograficas_4.png" /> Bacias hidrograficas'
            });
var format_Falhasgeologicas_5 = new ol.format.GeoJSON();
var features_Falhasgeologicas_5 = format_Falhasgeologicas_5.readFeatures(json_Falhasgeologicas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Falhasgeologicas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Falhasgeologicas_5.addFeatures(features_Falhasgeologicas_5);
var lyr_Falhasgeologicas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Falhasgeologicas_5, 
                style: style_Falhasgeologicas_5,
                popuplayertitle: 'Falhas geologicas',
                interactive: false,
                title: '<img src="styles/legend/Falhasgeologicas_5.png" /> Falhas geologicas'
            });
var format_Redesdeagua_6 = new ol.format.GeoJSON();
var features_Redesdeagua_6 = format_Redesdeagua_6.readFeatures(json_Redesdeagua_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Redesdeagua_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redesdeagua_6.addFeatures(features_Redesdeagua_6);
var lyr_Redesdeagua_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redesdeagua_6, 
                style: style_Redesdeagua_6,
                popuplayertitle: 'Redes de agua',
                interactive: false,
    title: 'Redes de agua<br />\
    <img src="styles/legend/Redesdeagua_6_0.png" /> Alto dos Espalhafatos / Ribeirinha<br />\
    <img src="styles/legend/Redesdeagua_6_1.png" /> Caixa do Figueiredo / Chão Frio<br />\
    <img src="styles/legend/Redesdeagua_6_2.png" /> Castelo Branco<br />\
    <img src="styles/legend/Redesdeagua_6_3.png" /> Chão Frio<br />\
    <img src="styles/legend/Redesdeagua_6_4.png" /> Covões / Canada Larga<br />\
    <img src="styles/legend/Redesdeagua_6_5.png" /> Estrada da Caldeira / Facho<br />\
    <img src="styles/legend/Redesdeagua_6_6.png" /> Fajã<br />\
    <img src="styles/legend/Redesdeagua_6_7.png" /> Feteira de Cima<br />\
    <img src="styles/legend/Redesdeagua_6_8.png" /> Flamengos<br />\
    <img src="styles/legend/Redesdeagua_6_9.png" /> Lombega<br />\
    <img src="styles/legend/Redesdeagua_6_10.png" /> Matriz / Conceição<br />\
    <img src="styles/legend/Redesdeagua_6_11.png" /> Miragaia/Atrás da Ladeira<br />\
    <img src="styles/legend/Redesdeagua_6_12.png" /> Norte Pequeno<br />\
    <img src="styles/legend/Redesdeagua_6_13.png" /> Praia do Norte<br />\
    <img src="styles/legend/Redesdeagua_6_14.png" /> Ribeira do Cabo<br />\
    <img src="styles/legend/Redesdeagua_6_15.png" /> Ribeira Funda<br />\
    <img src="styles/legend/Redesdeagua_6_16.png" /> Salão / Cedros<br />\
    <img src="styles/legend/Redesdeagua_6_17.png" /> Santa Bárbara / Cabeço das Moças<br />\
    <img src="styles/legend/Redesdeagua_6_18.png" /> Trupes<br />\
    <img src="styles/legend/Redesdeagua_6_19.png" /> Varadouro<br />' });
var format_Ligaesentreestruturas_7 = new ol.format.GeoJSON();
var features_Ligaesentreestruturas_7 = format_Ligaesentreestruturas_7.readFeatures(json_Ligaesentreestruturas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Ligaesentreestruturas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligaesentreestruturas_7.addFeatures(features_Ligaesentreestruturas_7);
var lyr_Ligaesentreestruturas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ligaesentreestruturas_7, 
                style: style_Ligaesentreestruturas_7,
                popuplayertitle: 'Ligações entre estruturas',
                interactive: true,
    title: 'Ligações entre estruturas<br />\
    <img src="styles/legend/Ligaesentreestruturas_7_0.png" /> Furo --> Reservatorio<br />\
    <img src="styles/legend/Ligaesentreestruturas_7_1.png" /> Nascentes --> Reservatorio<br />\
    <img src="styles/legend/Ligaesentreestruturas_7_2.png" /> Alimentaçao por gravidade<br />\
    <img src="styles/legend/Ligaesentreestruturas_7_3.png" /> Alimentaçao seja por gravidade seja por bomba<br />\
    <img src="styles/legend/Ligaesentreestruturas_7_4.png" /> Alimentaçao por bomba<br />' });
var format_Outrasinfraestruturas_8 = new ol.format.GeoJSON();
var features_Outrasinfraestruturas_8 = format_Outrasinfraestruturas_8.readFeatures(json_Outrasinfraestruturas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Outrasinfraestruturas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outrasinfraestruturas_8.addFeatures(features_Outrasinfraestruturas_8);
var lyr_Outrasinfraestruturas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outrasinfraestruturas_8, 
                style: style_Outrasinfraestruturas_8,
                popuplayertitle: 'Outras infra-estruturas',
                interactive: true,
                title: '<img src="styles/legend/Outrasinfraestruturas_8.png" /> Outras infra-estruturas'
            });
var format_Reservatorios_9 = new ol.format.GeoJSON();
var features_Reservatorios_9 = format_Reservatorios_9.readFeatures(json_Reservatorios_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Reservatorios_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservatorios_9.addFeatures(features_Reservatorios_9);
var lyr_Reservatorios_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservatorios_9, 
                style: style_Reservatorios_9,
                popuplayertitle: 'Reservatorios',
                interactive: true,
    title: 'Reservatorios<br />\
    <img src="styles/legend/Reservatorios_9_0.png" /> Reservatorio pequeno<br />\
    <img src="styles/legend/Reservatorios_9_1.png" /> Reservatorio medio<br />\
    <img src="styles/legend/Reservatorios_9_2.png" /> Grande reservatorio<br />' });
var format_NascentesOutras_10 = new ol.format.GeoJSON();
var features_NascentesOutras_10 = format_NascentesOutras_10.readFeatures(json_NascentesOutras_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_NascentesOutras_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NascentesOutras_10.addFeatures(features_NascentesOutras_10);
var lyr_NascentesOutras_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NascentesOutras_10, 
                style: style_NascentesOutras_10,
                popuplayertitle: 'Nascentes Outras',
                interactive: true,
                title: '<img src="styles/legend/NascentesOutras_10.png" /> Nascentes Outras'
            });
var format_NascentesPrincipais_11 = new ol.format.GeoJSON();
var features_NascentesPrincipais_11 = format_NascentesPrincipais_11.readFeatures(json_NascentesPrincipais_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_NascentesPrincipais_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NascentesPrincipais_11.addFeatures(features_NascentesPrincipais_11);
var lyr_NascentesPrincipais_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NascentesPrincipais_11, 
                style: style_NascentesPrincipais_11,
                popuplayertitle: 'Nascentes Principais',
                interactive: true,
    title: 'Nascentes Principais<br />\
    <img src="styles/legend/NascentesPrincipais_11_0.png" /> Aguas Claras<br />\
    <img src="styles/legend/NascentesPrincipais_11_1.png" /> Alto do Chao<br />\
    <img src="styles/legend/NascentesPrincipais_11_2.png" /> Alto do Inverno<br />\
    <img src="styles/legend/NascentesPrincipais_11_3.png" /> Areias<br />\
    <img src="styles/legend/NascentesPrincipais_11_4.png" /> Castelhano<br />\
    <img src="styles/legend/NascentesPrincipais_11_5.png" /> Fonte dos Namorados<br />\
    <img src="styles/legend/NascentesPrincipais_11_6.png" /> Lopo<br />\
    <img src="styles/legend/NascentesPrincipais_11_7.png" /> Praia do Norte<br />' });
var format_Furos_12 = new ol.format.GeoJSON();
var features_Furos_12 = format_Furos_12.readFeatures(json_Furos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:102332'});
var jsonSource_Furos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Furos_12.addFeatures(features_Furos_12);
var lyr_Furos_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Furos_12, 
                style: style_Furos_12,
                popuplayertitle: 'Furos',
                interactive: true,
    title: 'Furos<br />\
    <img src="styles/legend/Furos_12_0.png" /> Ativa<br />\
    <img src="styles/legend/Furos_12_1.png" /> Inativa<br />' });
var group_Nascentes = new ol.layer.Group({
                                layers: [lyr_NascentesOutras_10,lyr_NascentesPrincipais_11,],
                                fold: 'close',
                                title: 'Nascentes'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(false);lyr_SistemasaquiferosFaial_2.setVisible(false);lyr_Freguesias_Grupo_Central_3.setVisible(false);lyr_Baciashidrograficas_4.setVisible(false);lyr_Falhasgeologicas_5.setVisible(false);lyr_Redesdeagua_6.setVisible(true);lyr_Ligaesentreestruturas_7.setVisible(false);lyr_Outrasinfraestruturas_8.setVisible(true);lyr_Reservatorios_9.setVisible(true);lyr_NascentesOutras_10.setVisible(true);lyr_NascentesPrincipais_11.setVisible(true);lyr_Furos_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_SistemasaquiferosFaial_2,lyr_Freguesias_Grupo_Central_3,lyr_Baciashidrograficas_4,lyr_Falhasgeologicas_5,lyr_Redesdeagua_6,lyr_Ligaesentreestruturas_7,lyr_Outrasinfraestruturas_8,lyr_Reservatorios_9,group_Nascentes,lyr_Furos_12];
lyr_SistemasaquiferosFaial_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'geologichistory': 'geologichistory', 'geologicunittype_href': 'geologicunittype_href', 'composition': 'composition', 'approximatedepth': 'approximatedepth', 'approximatethickness': 'approximatethickness', 'beginlifespanversion': 'beginlifespanversion', 'islayered': 'islayered', 'fid_2': 'fid_2', 'Massa de agua': 'Massa de agua', 'Area saliente': 'Area saliente', 'Litologia dominante': 'Litologia dominante', 'Tipo aquifero': 'Tipo aquifero', 'Características gerais': 'Características gerais', 'Caudal': 'Caudal', 'Caudal especifico (l/s*m)': 'Caudal especifico (l/s*m)', 'Transmissividade (m²/s)': 'Transmissividade (m²/s)', 'Permeabilidade (m/s)': 'Permeabilidade (m/s)', 'Recursos totais (hm3/an)': 'Recursos totais (hm3/an)', 'Facies predominantes': 'Facies predominantes', 'Condutividade (µS/cm)': 'Condutividade (µS/cm)', 'Anioes principais': 'Anioes principais', 'Catioes principais': 'Catioes principais', 'Outros dados relevantes': 'Outros dados relevantes', 'Fonte': 'Fonte', });
lyr_Freguesias_Grupo_Central_3.set('fieldAliases', {'DICOFRE': 'DICOFRE', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'ILHA': 'ILHA', 'FONTE_V3': 'FONTE_V3', 'AREA_V3_HA': 'AREA_V3_HA', });
lyr_Baciashidrograficas_4.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'language': 'language', 'nativeness': 'nativeness', 'namestatus': 'namestatus', 'sourceofname': 'sourceofname', 'pronunciation': 'pronunciation', 'text': 'text', 'script': 'script', 'beginlifespanversion': 'beginlifespanversion', 'localid': 'localid', 'namespace': 'namespace', 'Area': 'Area', });
lyr_Falhasgeologicas_5.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'localid': 'localid', 'namespace': 'namespace', 'geologichistory': 'geologichistory', 'faulttype_href': 'faulttype_href', });
lyr_Redesdeagua_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TEMA': 'TEMA', 'DESIGNACAO': 'DESIGNACAO', 'COD_INSAAR': 'COD_INSAAR', 'ENT_GESTOR': 'ENT_GESTOR', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Ligaesentreestruturas_7.set('fieldAliases', {'id': 'id', 'Lien': 'Lien', 'Num': 'Num', 'Type': 'Type', });
lyr_Outrasinfraestruturas_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Designaça': 'Designaça', 'Entrada': 'Entrada', 'Saida': 'Saida', 'Contador': 'Contador', 'popup_html': 'popup_html', 'popup1': 'popup1', 'popup2': 'popup2', });
lyr_Reservatorios_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Nome', 'Entrada': 'Entrada', 'Saida': 'Saida', 'Capacidade': 'Capacidade', 'Categoria': 'Categoria', 'Cloragem': 'Cloragem', 'Contador': 'Contador', 'Comentario': 'Comentario', 'popup_html': 'popup_html', 'popup2': 'popup2', 'popup3': 'popup3', });
lyr_NascentesOutras_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TEMA': 'TEMA', 'DESIGNACAO': 'DESIGNACAO', 'SIST_AQUIF': 'SIST_AQUIF', 'USO': 'USO', 'Q_M3_D': 'Q_M3_D', 'PH': 'PH', 'T_COL': 'T_COL', 'CONDUCT': 'CONDUCT', 'CO2_LIVRE': 'CO2_LIVRE', 'ALCALINIDA': 'ALCALINIDA', 'SIO2': 'SIO2', 'NA': 'NA', 'K': 'K', 'CA': 'CA', 'MG': 'MG', 'NH4': 'NH4', 'LI': 'LI', 'FE': 'FE', 'AL': 'AL', 'SO4': 'SO4', 'CL': 'CL', 'F': 'F', 'NO3': 'NO3', 'LI_1': 'LI_1', 'SC': 'SC', 'TI': 'TI', 'V': 'V', 'MN': 'MN', 'FE_1': 'FE_1', 'CO': 'CO', 'NI': 'NI', 'CU': 'CU', 'ZN': 'ZN', 'AS_': 'AS_', 'SE': 'SE', 'BR': 'BR', 'RB': 'RB', 'SR': 'SR', 'Y': 'Y', 'NB': 'NB', 'MO': 'MO', 'CD': 'CD', 'SN': 'SN', 'I': 'I', 'CS': 'CS', 'BA': 'BA', 'LA': 'LA', 'CE': 'CE', 'ND': 'ND', 'TA': 'TA', 'W': 'W', 'PB': 'PB', 'TH': 'TH', 'U': 'U', 'TRATAMENTO': 'TRATAMENTO', 'ENTIDADE': 'ENTIDADE', 'DATA': 'DATA', 'ENVOLVENTE': 'ENVOLVENTE', 'Q_MIN': 'Q_MIN', 'Q_MAX': 'Q_MAX', 'Q_MED': 'Q_MED', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'RuleID_MON': 'RuleID_MON', 'RuleID_INS': 'RuleID_INS', });
lyr_NascentesPrincipais_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TEMA': 'TEMA', 'DESIGNACAO': 'DESIGNACAO', 'REFERENCIA': 'REFERENCIA', 'ALTITUDE': 'ALTITUDE', 'CAUDAL': 'CAUDAL', 'GESTOR': 'GESTOR', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'FREGUESIA': 'FREGUESIA', 'CONCELHO': 'CONCELHO', 'RuleID_MON': 'RuleID_MON', 'RuleID_INS': 'RuleID_INS', 'OBS': 'OBS', });
lyr_Furos_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'id_unico': 'id_unico', 'designacao': 'designacao', 'situacao': 'situacao', 'X WGS84': 'X WGS84', 'Y WGS84': 'Y WGS84', 'Z ': 'Z ', 'Prof Agua': 'Prof Agua', 'Cote_Piezo': 'Cote_Piezo', 'freguesia': 'freguesia', 'freguesia deservida': 'freguesia deservida', 'Comentario': 'Comentario', 'popup': 'popup', 'popup1': 'popup1', 'popup2': 'popup2', });
lyr_SistemasaquiferosFaial_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'gml_id': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'geologichistory': 'TextEdit', 'geologicunittype_href': 'TextEdit', 'composition': 'TextEdit', 'approximatedepth': 'TextEdit', 'approximatethickness': 'TextEdit', 'beginlifespanversion': 'TextEdit', 'islayered': 'TextEdit', 'fid_2': 'TextEdit', 'Massa de agua': 'TextEdit', 'Area saliente': 'TextEdit', 'Litologia dominante': 'TextEdit', 'Tipo aquifero': 'TextEdit', 'Características gerais': 'TextEdit', 'Caudal': 'TextEdit', 'Caudal especifico (l/s*m)': 'TextEdit', 'Transmissividade (m²/s)': 'TextEdit', 'Permeabilidade (m/s)': 'TextEdit', 'Recursos totais (hm3/an)': 'TextEdit', 'Facies predominantes': 'TextEdit', 'Condutividade (µS/cm)': 'TextEdit', 'Anioes principais': 'TextEdit', 'Catioes principais': 'TextEdit', 'Outros dados relevantes': 'TextEdit', 'Fonte': '', });
lyr_Freguesias_Grupo_Central_3.set('fieldImages', {'DICOFRE': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'ILHA': 'TextEdit', 'FONTE_V3': 'TextEdit', 'AREA_V3_HA': 'TextEdit', });
lyr_Baciashidrograficas_4.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'language': 'TextEdit', 'nativeness': 'TextEdit', 'namestatus': 'TextEdit', 'sourceofname': 'TextEdit', 'pronunciation': 'TextEdit', 'text': 'TextEdit', 'script': 'TextEdit', 'beginlifespanversion': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'Area': 'TextEdit', });
lyr_Falhasgeologicas_5.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'geologichistory': 'TextEdit', 'faulttype_href': 'TextEdit', });
lyr_Redesdeagua_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'TEMA': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'COD_INSAAR': 'TextEdit', 'ENT_GESTOR': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ligaesentreestruturas_7.set('fieldImages', {'id': 'TextEdit', 'Lien': 'TextEdit', 'Num': 'TextEdit', 'Type': 'TextEdit', });
lyr_Outrasinfraestruturas_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Designaça': 'TextEdit', 'Entrada': 'TextEdit', 'Saida': 'TextEdit', 'Contador': 'CheckBox', 'popup_html': 'TextEdit', 'popup1': 'TextEdit', 'popup2': 'TextEdit', });
lyr_Reservatorios_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', 'Entrada': 'TextEdit', 'Saida': 'TextEdit', 'Capacidade': 'TextEdit', 'Categoria': 'TextEdit', 'Cloragem': 'CheckBox', 'Contador': 'CheckBox', 'Comentario': 'TextEdit', 'popup_html': 'TextEdit', 'popup2': 'TextEdit', 'popup3': 'TextEdit', });
lyr_NascentesOutras_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'TEMA': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'SIST_AQUIF': 'TextEdit', 'USO': 'TextEdit', 'Q_M3_D': 'TextEdit', 'PH': 'TextEdit', 'T_COL': 'TextEdit', 'CONDUCT': 'TextEdit', 'CO2_LIVRE': 'TextEdit', 'ALCALINIDA': 'TextEdit', 'SIO2': 'TextEdit', 'NA': 'TextEdit', 'K': 'TextEdit', 'CA': 'TextEdit', 'MG': 'TextEdit', 'NH4': 'TextEdit', 'LI': 'TextEdit', 'FE': 'TextEdit', 'AL': 'TextEdit', 'SO4': 'TextEdit', 'CL': 'TextEdit', 'F': 'TextEdit', 'NO3': 'TextEdit', 'LI_1': 'TextEdit', 'SC': 'TextEdit', 'TI': 'TextEdit', 'V': 'TextEdit', 'MN': 'TextEdit', 'FE_1': 'TextEdit', 'CO': 'TextEdit', 'NI': 'TextEdit', 'CU': 'TextEdit', 'ZN': 'TextEdit', 'AS_': 'TextEdit', 'SE': 'TextEdit', 'BR': 'TextEdit', 'RB': 'TextEdit', 'SR': 'TextEdit', 'Y': 'TextEdit', 'NB': 'TextEdit', 'MO': 'TextEdit', 'CD': 'TextEdit', 'SN': 'TextEdit', 'I': 'TextEdit', 'CS': 'TextEdit', 'BA': 'TextEdit', 'LA': 'TextEdit', 'CE': 'TextEdit', 'ND': 'TextEdit', 'TA': 'TextEdit', 'W': 'TextEdit', 'PB': 'TextEdit', 'TH': 'TextEdit', 'U': 'TextEdit', 'TRATAMENTO': 'TextEdit', 'ENTIDADE': 'TextEdit', 'DATA': 'TextEdit', 'ENVOLVENTE': 'TextEdit', 'Q_MIN': 'TextEdit', 'Q_MAX': 'TextEdit', 'Q_MED': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'RuleID_MON': 'TextEdit', 'RuleID_INS': 'TextEdit', });
lyr_NascentesPrincipais_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'TEMA': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'REFERENCIA': 'TextEdit', 'ALTITUDE': 'TextEdit', 'CAUDAL': 'TextEdit', 'GESTOR': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'FREGUESIA': 'TextEdit', 'CONCELHO': 'TextEdit', 'RuleID_MON': 'TextEdit', 'RuleID_INS': 'TextEdit', 'OBS': 'TextEdit', });
lyr_Furos_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'id_unico': 'TextEdit', 'designacao': 'TextEdit', 'situacao': 'TextEdit', 'X WGS84': 'TextEdit', 'Y WGS84': 'TextEdit', 'Z ': 'TextEdit', 'Prof Agua': 'TextEdit', 'Cote_Piezo': 'Range', 'freguesia': 'TextEdit', 'freguesia deservida': 'TextEdit', 'Comentario': 'TextEdit', 'popup': 'TextEdit', 'popup1': 'TextEdit', 'popup2': 'TextEdit', });
lyr_SistemasaquiferosFaial_2.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - visible with data', 'gml_id': 'hidden field', 'localid': 'hidden field', 'namespace': 'hidden field', 'geologichistory': 'hidden field', 'geologicunittype_href': 'hidden field', 'composition': 'hidden field', 'approximatedepth': 'hidden field', 'approximatethickness': 'hidden field', 'beginlifespanversion': 'hidden field', 'islayered': 'hidden field', 'fid_2': 'hidden field', 'Massa de agua': 'hidden field', 'Area saliente': 'inline label - visible with data', 'Litologia dominante': 'inline label - visible with data', 'Tipo aquifero': 'inline label - visible with data', 'Características gerais': 'inline label - visible with data', 'Caudal': 'inline label - visible with data', 'Caudal especifico (l/s*m)': 'inline label - visible with data', 'Transmissividade (m²/s)': 'inline label - visible with data', 'Permeabilidade (m/s)': 'inline label - visible with data', 'Recursos totais (hm3/an)': 'inline label - visible with data', 'Facies predominantes': 'inline label - visible with data', 'Condutividade (µS/cm)': 'inline label - visible with data', 'Anioes principais': 'inline label - visible with data', 'Catioes principais': 'inline label - visible with data', 'Outros dados relevantes': 'inline label - visible with data', 'Fonte': 'header label - visible with data', });
lyr_Freguesias_Grupo_Central_3.set('fieldLabels', {'DICOFRE': 'hidden field', 'FREGUESIA': 'inline label - visible with data', 'CONCELHO': 'hidden field', 'ILHA': 'hidden field', 'FONTE_V3': 'hidden field', 'AREA_V3_HA': 'inline label - visible with data', });
lyr_Baciashidrograficas_4.set('fieldLabels', {'fid': 'hidden field', 'gml_id': 'hidden field', 'language': 'hidden field', 'nativeness': 'hidden field', 'namestatus': 'hidden field', 'sourceofname': 'hidden field', 'pronunciation': 'hidden field', 'text': 'inline label - visible with data', 'script': 'hidden field', 'beginlifespanversion': 'hidden field', 'localid': 'hidden field', 'namespace': 'hidden field', 'Area': 'inline label - visible with data', });
lyr_Falhasgeologicas_5.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'localid': 'no label', 'namespace': 'no label', 'geologichistory': 'no label', 'faulttype_href': 'no label', });
lyr_Redesdeagua_6.set('fieldLabels', {'OBJECTID': 'no label', 'TEMA': 'no label', 'DESIGNACAO': 'no label', 'COD_INSAAR': 'no label', 'ENT_GESTOR': 'no label', 'FREGUESIA': 'no label', 'CONCELHO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Ligaesentreestruturas_7.set('fieldLabels', {'id': 'hidden field', 'Lien': 'inline label - visible with data', 'Num': 'hidden field', 'Type': 'inline label - visible with data', });
lyr_Outrasinfraestruturas_8.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Designaça': 'inline label - visible with data', 'Entrada': 'inline label - visible with data', 'Saida': 'inline label - visible with data', 'Contador': 'inline label - visible with data', 'popup_html': 'no label', 'popup1': 'no label', 'popup2': 'no label', });
lyr_Reservatorios_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Nome': 'inline label - visible with data', 'Entrada': 'inline label - visible with data', 'Saida': 'inline label - visible with data', 'Capacidade': 'hidden field', 'Categoria': 'hidden field', 'Cloragem': 'inline label - visible with data', 'Contador': 'inline label - visible with data', 'Comentario': 'header label - visible with data', 'popup_html': 'no label', 'popup2': 'no label', 'popup3': 'no label', });
lyr_NascentesOutras_10.set('fieldLabels', {'OBJECTID': 'hidden field', 'TEMA': 'hidden field', 'DESIGNACAO': 'inline label - visible with data', 'SIST_AQUIF': 'inline label - visible with data', 'USO': 'hidden field', 'Q_M3_D': 'inline label - visible with data', 'PH': 'hidden field', 'T_COL': 'hidden field', 'CONDUCT': 'hidden field', 'CO2_LIVRE': 'hidden field', 'ALCALINIDA': 'hidden field', 'SIO2': 'hidden field', 'NA': 'hidden field', 'K': 'hidden field', 'CA': 'hidden field', 'MG': 'hidden field', 'NH4': 'hidden field', 'LI': 'hidden field', 'FE': 'hidden field', 'AL': 'hidden field', 'SO4': 'hidden field', 'CL': 'hidden field', 'F': 'hidden field', 'NO3': 'hidden field', 'LI_1': 'hidden field', 'SC': 'hidden field', 'TI': 'hidden field', 'V': 'hidden field', 'MN': 'hidden field', 'FE_1': 'hidden field', 'CO': 'hidden field', 'NI': 'hidden field', 'CU': 'hidden field', 'ZN': 'hidden field', 'AS_': 'hidden field', 'SE': 'hidden field', 'BR': 'hidden field', 'RB': 'hidden field', 'SR': 'hidden field', 'Y': 'hidden field', 'NB': 'hidden field', 'MO': 'hidden field', 'CD': 'hidden field', 'SN': 'hidden field', 'I': 'hidden field', 'CS': 'hidden field', 'BA': 'hidden field', 'LA': 'hidden field', 'CE': 'hidden field', 'ND': 'hidden field', 'TA': 'hidden field', 'W': 'hidden field', 'PB': 'hidden field', 'TH': 'hidden field', 'U': 'hidden field', 'TRATAMENTO': 'hidden field', 'ENTIDADE': 'hidden field', 'DATA': 'hidden field', 'ENVOLVENTE': 'hidden field', 'Q_MIN': 'hidden field', 'Q_MAX': 'hidden field', 'Q_MED': 'hidden field', 'POINT_X': 'inline label - visible with data', 'POINT_Y': 'inline label - visible with data', 'FREGUESIA': 'inline label - visible with data', 'CONCELHO': 'hidden field', 'RuleID_MON': 'hidden field', 'RuleID_INS': 'hidden field', });
lyr_NascentesPrincipais_11.set('fieldLabels', {'OBJECTID': 'hidden field', 'TEMA': 'hidden field', 'DESIGNACAO': 'inline label - visible with data', 'REFERENCIA': 'inline label - visible with data', 'ALTITUDE': 'inline label - always visible', 'CAUDAL': 'hidden field', 'GESTOR': 'hidden field', 'POINT_X': 'inline label - visible with data', 'POINT_Y': 'inline label - visible with data', 'FREGUESIA': 'inline label - visible with data', 'CONCELHO': 'hidden field', 'RuleID_MON': 'hidden field', 'RuleID_INS': 'hidden field', 'OBS': 'hidden field', });
lyr_Furos_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'id_unico': 'inline label - visible with data', 'designacao': 'inline label - visible with data', 'situacao': 'hidden field', 'X WGS84': 'inline label - visible with data', 'Y WGS84': 'inline label - visible with data', 'Z ': 'inline label - visible with data', 'Prof Agua': 'inline label - visible with data', 'Cote_Piezo': 'hidden field', 'freguesia': 'inline label - visible with data', 'freguesia deservida': 'hidden field', 'Comentario': 'header label - visible with data', 'popup': 'no label', 'popup1': 'no label', 'popup2': 'no label', });
lyr_Furos_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});