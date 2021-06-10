import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PoweredByLinks from 'app/fuse-layouts/shared-components/PoweredByLinks';
import PurchaseButton from 'app/fuse-layouts/shared-components/PurchaseButton';
import DocumentationButton from 'app/fuse-layouts/shared-components/DocumentationButton';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';

function FooterLayout3(props) {
	const footerTheme = useSelector(selectFooterTheme);

	return (
		<ThemeProvider theme={footerTheme}>
				<Toolbar className="container min-h-48 md:min-h-64 px-8 sm:px-12 lg:px-20 py-0 flex items-center overflow-x-auto">
				</Toolbar>
		</ThemeProvider>
	);
}

export default memo(FooterLayout3);
