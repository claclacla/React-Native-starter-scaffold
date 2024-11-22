import { StyleSheet } from 'react-native';

import { Colors } from 'react-native-ui-lib';

/*
export const colorCodes: string[] = [
    '#249846', 
    '#154658', 
    '#DC463E', 
    '#721D20', 
    '#743F79', 
    '#9AC641', 
    '#3F2F7A', 
    '#F1D93C', 
    '#E67541', 
    '#124628', 
    '#3E79B0', 
    '#4CBCD5', 
    '#28826C', 
    '#A1A4A0',
    '#3F4240', 
    '#E0689C', 
    '#43291B', 
    '#EBA9A9', 
    '#54391D', 
    '#89705C'
  ];
*/

export const colorCodes: string[] = [
    '#ADD8E6', // Light Blue
    '#808080', // Grey
    '#A52A2A', // Brown Red
    '#DC143C', // Crimson
    '#FF6347', // Tomato Red
    '#FFCCCC', // Light Red
    '#696969', // Dim Grey
    '#FF4500', // Orange Red
    '#D3D3D3', // Light Grey
    '#00BFFF', // Deep Sky Blue
    '#0000FF', // Blue
    '#323232', // Dark Grey
];

export const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
    },
    width90Percent: {
        width: '90%',
    },
    bold: {
        fontWeight: 'bold',
    },
    authenticationImage: {
        resizeMode: 'contain',
        marginBottom: '10%',
    },
    authenticationTextInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: '5%',
        color: '#ccc',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 18,
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },

    // React Native Element Dropdown

    reactNativeElementDropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    reactNativeElementDropdownItem: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reactNativeElementDropdownTextItem: {
        flex: 1,
        fontSize: 12,
    },
    reactNativeElementDropdownPlaceholderStyle: {
        fontSize: 12,
    },
    reactNativeElementDropdownSelectedTextStyle: {
        fontSize: 12,
    },
    /*
    iconStyle: {
      width: 30,
      height: 30,
    },
    */
    reactNativeElementDropdownInputSearchStyle: {
        height: 35,
        fontSize: 12,
    },

    // React Native Calendars

    reactNativeCalendarsStyle: {
        borderRadius: 10
    }
});