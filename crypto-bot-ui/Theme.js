import { StyleSheet } from 'react-native';

export const theme = {
    color: {
        value_info: 'tomato',
    },
    padding: {
        s: 5,
        m: 10,
        l: 15,
    },
    fontSize: {
        s: 16,
        m: 20,
        l: 24,
    },
};

export const list_theme = StyleSheet.create({
    root: {
        padding: theme.padding.m,
    },
    item_container: {
        padding: theme.padding.s,
        // borderBottomWidth: 1.5,
        flex: 1,
    },
    header_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.padding.s,
    },
    symbol_text: {
        fontSize: theme.fontSize.m,
    },
    title_text: {
        fontSize: theme.fontSize.s,
    },
    content_text: {
        fontSize: theme.fontSize.s,
        fontWeight: 'bold',
    },
    pnlroe_text: {
        fontSize: theme.fontSize.m,
        fontWeight: 'bold',
    },
    rigth_side_view: {
        alignItems: 'flex-end',
    }
})