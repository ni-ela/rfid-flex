import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import { url } from '../../utils';

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs
            className="c-breadcrumbs"
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <label className="breadcrumbs__label" key={to}>
                        {url[to]}
                    </label>
                ) : (
                    <Link underline="hover" color="inherit" to={to} key={to}>
                        {url[to]}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}


